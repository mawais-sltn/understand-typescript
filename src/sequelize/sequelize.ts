import { Namespace } from 'cls-hooked';
// eslint-disable-next-line no-duplicate-imports
import { Sequelize as OriginalSequelize } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CostEntry } from '../cloud-cfo/model/cost-entry';
import { TenantSavingsEstimation } from '../cloud-cfo/model/tenant-savings-estimations';
import { Tenant } from '../cloud-cfo/model/tenant';
import { TenantCommitment } from '../cloud-cfo/model/tenant-commitment';
import { AwsAccount } from '../cloud-cfo/model/accounts';
import { Recommendation } from '../cloud-fix/model/Recommendation.model';

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

export function getCloudFixSequelize(namespace: Namespace): Sequelize {
  // here we use original Sequelize to avoid set CLS into
  // typescript version instead of original
  OriginalSequelize.useCLS(namespace);

  return new Sequelize({
    host: 'localhost',
    database: 'cloudcfo_prod_local',
    username: 'root',
    password: 'admin',
    models: [Recommendation],
    dialect: 'mysql',
    repositoryMode: true,
  });
}
