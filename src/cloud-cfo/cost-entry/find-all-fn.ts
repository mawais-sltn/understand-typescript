import { createNamespace } from 'cls-hooked';
import { getCloudCfoSequelize } from '../../sequelize/sequelize';
import { CostEntryRepository } from './cost-entry-repository';
import { CostGroupKey, CostEntry } from '../model/cost-entry';

const DEFAULT_TENANT_ID = 12345;
const groupKey1 = CostGroupKey.SERVICE;
const groupKey2 = CostGroupKey.PURCHASE_TYPE;
// const startDate = '2022-02-15';
const endDate = '2022-02-16';
const requiredGroupKeys: [CostGroupKey, CostGroupKey | undefined][] = [
  [CostGroupKey.REGION, undefined],
  [CostGroupKey.SERVICE, undefined],
  [CostGroupKey.PURCHASE_TYPE, undefined],
  [CostGroupKey.LINKED_ACCOUNT, undefined],
  [CostGroupKey.SERVICE, CostGroupKey.REGION],
  [CostGroupKey.REGION, CostGroupKey.SERVICE],
  [CostGroupKey.REGION, CostGroupKey.LINKED_ACCOUNT],
  [CostGroupKey.SERVICE, CostGroupKey.LINKED_ACCOUNT],
  [CostGroupKey.PURCHASE_TYPE, CostGroupKey.LINKED_ACCOUNT],
];

async function testingTheConnection() {
  const sequelize = getCloudCfoSequelize(createNamespace('sequelize'));

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const repository = sequelize.getRepository(CostEntry);
    const costEntryRepository = new CostEntryRepository(repository);

    const costDbData = costEntryRepository.searchCostPerformanceData(
      DEFAULT_TENANT_ID,
      groupKey1,
      groupKey2,
      undefined,
      endDate,
    );
    console.log('costDbData :: ', costDbData);

    for (let i = 0; i < requiredGroupKeys.length; i++) {
      const costDbData = costEntryRepository.getByTenantIdAndGroupKeys(
        DEFAULT_TENANT_ID,
        requiredGroupKeys[i][0],
        requiredGroupKeys[i][1],
      );
      console.log(costDbData);
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

void testingTheConnection().then((error) => console.log('error', error));
