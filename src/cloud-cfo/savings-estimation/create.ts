import { createNamespace } from 'cls-hooked';

import { getCloudCfoSequelize } from '../../sequelize/sequelize';
import { TenantSavingsEstimation } from '../tenant-savings-estimations';
import { TenantSavingsEstimationRepository } from './tenant-savings-estimation-repository';

async function testingTheQuery() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));
  const min = 1;
  const max = 999;
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const repository = sequelize.getRepository(TenantSavingsEstimation);
    const tenantSavingsEstimationRepository = new TenantSavingsEstimationRepository(repository);
    const createdDate = new Date(Date.now()).toISOString();
    for (let index = 0; index < 10; index++) {
      // eslint-disable-next-line no-await-in-loop
      const tenantSavingsEstimation = await tenantSavingsEstimationRepository.create({
        criHourlyInvestment: Math.random() * (max - min) + min,
        currentCriCost: Math.random() * (max - min) + min,
        currentCriWastage: Math.random() * (max - min) + min,
        currentOnDemandCost: Math.random() * (max - min) + min,
        estimatedHourlySaving: Math.random() * (max - min) + min,
        optimizedCriCost: Math.random() * (max - min) + min,
        optimizedCriWastage: Math.random() * (max - min) + min,
        optimizedOnDemandCost: Math.random() * (max - min) + min,
        tenantId: 74,
        calculatedAt: createdDate,
      });
      console.log(tenantSavingsEstimation);
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

void testingTheQuery().then((error) => console.log('error', error));
