import { createNamespace } from 'cls-hooked';
import { chain, sumBy } from 'lodash';

import { differenceInHours, startOfMonth } from 'date-fns';

import { enumFromName, extractDate } from '../../commons/utils';
import { savingPlans } from '../../test-data/tenant-commitments.data';
import { Ec2InstanceSavingsPlan, OfferingType, PricingOfferingClass, Term } from '../model';
import { getCloudCfoSequelize } from '../sequelize';
import { TenantCommitment } from '../tenant-commitment';
import { TenantCommitmentRepository } from './tenant-savings-commitment-repository';

async function testingTheQuery() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const repository = sequelize.getRepository(TenantCommitment);
    const tenantCommitmentRepository = new TenantCommitmentRepository(repository);

    const groupedSavingsPlans = groupSavingPlansByExpirationDateOfferingTypeOfferingClassTerm(savingPlans);
    console.log(groupedSavingsPlans);

    const now = new Date(Date.now());
    const createdDate = now.toISOString();
    for (const key in groupedSavingsPlans) {
      const _savingPlans = groupedSavingsPlans[key];
      const [month, offeringType, offeringClass, term] = key.split('|');
      const tenantCommitment = {
        tenantId: 74,
        month: extractDate(new Date(month)),
        offeringClass: enumFromName(offeringClass, PricingOfferingClass),
        offeringType: enumFromName(offeringType, OfferingType),
        term: enumFromName(term, Term),
        hourlyCommitment: sumBy(_savingPlans, (sp) => sp.commitment),
        remainingCommitment: sumBy(_savingPlans, (sp) => sp.commitment * differenceInHours(sp.expirationDate, now)),
        collectedAt: createdDate,
      };

      // eslint-disable-next-line no-await-in-loop
      await tenantCommitmentRepository.create(tenantCommitment);
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

type SpArray<T extends Ec2InstanceSavingsPlan> = { [key: string]: T[] };

function groupSavingPlansByExpirationDateOfferingTypeOfferingClassTerm<T extends Ec2InstanceSavingsPlan>(
  _savingPlans: T[],
): SpArray<T> {
  return chain(_savingPlans).groupBy(expirationDateOfferingTypeOfferingTermClassKey).value();
}

function expirationDateOfferingTypeOfferingTermClassKey(savingPlan: Ec2InstanceSavingsPlan): string {
  return [
    extractDate(startOfMonth(new Date(savingPlan.expirationDate))),
    savingPlan.paymentOption,
    enumFromName(savingPlan.savingsPlanType, PricingOfferingClass),
    savingPlan.term,
  ].join('|');
}

void testingTheQuery().then((error) => console.log('error', error));
