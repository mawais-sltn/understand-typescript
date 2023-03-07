import { Namespace } from 'cls-hooked';
// eslint-disable-next-line no-duplicate-imports
import { Sequelize as OriginalSequelize } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CostEntry } from './cost-entry';
import { AwsAccount } from './accounts';
import { Tenant } from './tenant';
import { TenantSavingsEstimation } from './tenant-savings-estimations';
import { TenantCommitment } from './tenant-commitment';

export function getCloudCfoSequelize(namespace: Namespace): Sequelize {
  // here we use original Sequelize to avoid set CLS into
  // typescript version instead of original
  OriginalSequelize.useCLS(namespace);

  return new Sequelize({
    host: 'localhost',
    database: 'cloudcfo_prod_local',
    username: 'root',
    password: 'admin',
    models: [CostEntry, TenantSavingsEstimation, Tenant, AwsAccount, TenantCommitment],
    dialect: 'mysql',
    repositoryMode: true,
  });
}
