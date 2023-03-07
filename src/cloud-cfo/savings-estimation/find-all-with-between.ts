import { createNamespace } from 'cls-hooked';

import { startOfToday, subDays } from 'date-fns';

import { getCloudCfoSequelize } from '../../sequelize/sequelize';
import { TenantSavingsEstimation } from '../tenant-savings-estimations';
import { TenantSavingsEstimationRepository } from './tenant-savings-estimation-repository';

// const DATE_FORMAT_WITH_ZERO_HOUR = 'yyyy-MM-dd\'T\'00:00:00\'Z\'';
// const DATE_FORMAT_WITH_24_HOUR = 'yyyy-MM-dd\'T\'23:59:59\'Z\'';
const CR_EXECUTION_FINALIZATION_DAYS = 14;

async function testingTheQuery() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const now = startOfToday();
    const start = subDays(now, CR_EXECUTION_FINALIZATION_DAYS);
    const end = subDays(now, CR_EXECUTION_FINALIZATION_DAYS);
    // const start = format(subDays(now, CR_EXECUTION_FINALIZATION_DAYS), DATE_FORMAT_WITH_ZERO_HOUR);
    // const end = format(subDays(now, CR_EXECUTION_FINALIZATION_DAYS), DATE_FORMAT_WITH_ZERO_HOUR);

    const repository = sequelize.getRepository(TenantSavingsEstimation);

    const tenantSavingsEstimationRepository = new TenantSavingsEstimationRepository(repository);
    const tenantSavingsEstimations = await tenantSavingsEstimationRepository.getEstimationsCalculatedInBetween(
      start,
      end,
    );
    console.log('tenantSavingsEstimations : ', tenantSavingsEstimations.length);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export function parseToDbDateFormat(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

void testingTheQuery().then((error) => console.log('error', error));
