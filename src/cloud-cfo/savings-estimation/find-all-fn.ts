import { createNamespace } from 'cls-hooked';

import { addDays, addMonths, startOfToday } from 'date-fns';

import { getCloudCfoSequelize } from '../../sequelize/sequelize';
import { TenantSavingsEstimationRepository } from './tenant-savings-estimation-repository';
import { TenantSavingsEstimation } from '../tenant-savings-estimations';

interface MasterAccount {
  tenantId: number;
}

const DATA_STABILIZATION_DELAY_DAYS = 2;
export const ESTIMATION_LONGER_THAN_N_DAYS = 7;
const SAVING_ESTIMATION_LOOK_BACK_MONTHS = 3;

async function testingTheQuery() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const masterAccounts: MasterAccount[] = [
      { tenantId: 74 },
      { tenantId: 58 },
      { tenantId: 69 },
      { tenantId: 47 },
      { tenantId: 96 },
    ];
    const allTenants = masterAccounts.map((item) => item.tenantId);
    console.log('allTenants : ', allTenants);
    const tenantSavingsEstimationEndDate = addDays(startOfToday(), -DATA_STABILIZATION_DELAY_DAYS);
    const end = tenantSavingsEstimationEndDate.toISOString();
    const start = addMonths(tenantSavingsEstimationEndDate, -SAVING_ESTIMATION_LOOK_BACK_MONTHS).toISOString();

    const repository = sequelize.getRepository(TenantSavingsEstimation);

    const tenantSavingsEstimationRepository = new TenantSavingsEstimationRepository(repository);
    const calculatedLimit = addDays(startOfToday(), -7);
    const tenantSavingsEstimations = await tenantSavingsEstimationRepository.getEstimationsCalculatedAfter(
      calculatedLimit,
    );
    console.log('tenantSavingsEstimations : ', tenantSavingsEstimations);
    const tenantsWithFreshEstimations = tenantSavingsEstimations.map((item) => item.tenantId);
    console.log('tenants : ', tenantsWithFreshEstimations);

    const task = allTenants
      .filter((tenant) => !tenantsWithFreshEstimations.includes(tenant))
      .map((tenantId) => ({ tenantId, start, end }));
    console.log('task:', JSON.stringify(task));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export function parseToDbDateFormat(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

void testingTheQuery().then((error) => console.log('error', error));
