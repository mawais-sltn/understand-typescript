import { createNamespace } from 'cls-hooked';

import { getCloudCfoSequelize } from '../sequelize';
import { TenantSavingsEstimationRepository } from './tenant-savings-estimation-repository';
import { TenantSavingsEstimation } from '../tenant-savings-estimations';

async function testingTheQuery() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const repository = sequelize.getRepository(TenantSavingsEstimation);
    const tenantSavingsEstimationRepository = new TenantSavingsEstimationRepository(repository);
    const tenantSavingsEstimation = await tenantSavingsEstimationRepository.findOneByTenantId(74);
    console.log('tenantSavingsEstimation : ', tenantSavingsEstimation);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

void testingTheQuery().then((error) => console.log('error', error));
