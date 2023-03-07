import { createNamespace } from 'cls-hooked';
import { chain, sumBy } from 'lodash';

import { differenceInHours, startOfMonth } from 'date-fns';

import { enumFromName, extractDate } from '../../commons/utils';
import { ris } from '../../test-data/tenant-commitments.data';
import { OfferingType, PricingOfferingClass, ReservedInstance, Term } from '../model';
import { getCloudCfoSequelize } from '../../sequelize/sequelize';
import { TenantCommitment } from '../tenant-commitment';
import { TenantCommitmentRepository } from './tenant-savings-commitment-repository';

async function testingTheQuery() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const repository = sequelize.getRepository(TenantCommitment);
    const tenantCommitmentRepository = new TenantCommitmentRepository(repository);

    const groupedReservedInstances = groupRIsByExpirationDateOfferingTypeOfferingClassTerm(ris);
    console.log(groupedReservedInstances);

    const now = new Date(Date.now());
    const createdDate = now.toISOString();
    for (const key in groupedReservedInstances) {
      const reservedInstances = groupedReservedInstances[key];
      const [month, offeringType, offeringClass, term] = key.split('|');
      const tenantCommitment = {
        tenantId: 74,
        month: extractDate(new Date(month)),
        offeringClass: enumFromName(offeringClass, PricingOfferingClass),
        offeringType: enumFromName(offeringType, OfferingType),
        term: enumFromName(term, Term),
        hourlyCommitment: sumBy(reservedInstances, (instance) => instance.effectiveHourlyPrice),
        remainingCommitment: sumBy(
          reservedInstances,
          (instance) => instance.effectiveHourlyPrice * differenceInHours(instance.expirationDate, now),
        ),
        collectedAt: createdDate,
      };

      // eslint-disable-next-line no-await-in-loop
      await tenantCommitmentRepository.create(tenantCommitment);
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

type RiArray<T extends ReservedInstance> = { [key: string]: T[] };

function groupRIsByExpirationDateOfferingTypeOfferingClassTerm<T extends ReservedInstance>(
  reservedInstances: T[],
): RiArray<T> {
  return chain(reservedInstances).groupBy(expirationDateOfferingTypeOfferingTermClassKey).value();
}

function expirationDateOfferingTypeOfferingTermClassKey(instance: ReservedInstance): string {
  return [
    extractDate(startOfMonth(instance.expirationDate)),
    instance.offeringType,
    instance.offeringClass,
    instance.term,
  ].join('|');
}

void testingTheQuery().then((error) => console.log('error', error));
