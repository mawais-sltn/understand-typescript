import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { AllowNull, Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

const TABLE_NAME = 'mawais__tenants';

@Table({
  tableName: TABLE_NAME,
  timestamps: false,
})
export class Tenant extends Model<InferAttributes<Tenant>, InferCreationAttributes<Tenant>> {
  @PrimaryKey
  @Column
  id!: number;

  @AllowNull(false)
  @Column({
    field: 'cognito_user_pool_id',
  })
  cognitoUserPoolId!: string;

  @Column({ field: 'subscription_active' })
  subscriptionActive!: boolean;

  @AllowNull(false)
  @Column({
    field: 'application_client_id',
  })
  applicationClientId!: string;

  @AllowNull(false)
  @Column({
    field: 'application_client_secret',
  })
  applicationClientSecret!: string;

  @AllowNull(false)
  @Unique
  @Column({
    field: 'tenant_id',
  })
  externalTenantId!: string;

  @Column({ field: 'coin_purchase_enabled', defaultValue: false, allowNull: false, type: DataType.BOOLEAN })
  coinPurchaseEnabled!: CreationOptional<boolean>;

  @Column({ field: 'optimization_enabled', defaultValue: false, allowNull: false, type: DataType.BOOLEAN })
  optimizationEnabled!: CreationOptional<boolean>;

  @Column({ field: 'all_upfront_under_n_days', defaultValue: 0, allowNull: false, type: DataType.NUMBER })
  preferAllUpfrontUnderNDays!: CreationOptional<number>;

  @Column({
    field: 'autoapproval_settings',
    defaultValue: JSON.stringify({
      version: 1.0,
      expandMaxWeekly: 0,
      expandMaxDays: 14,
      deferMaxWeekly: 0,
      extendMaxDays: 60,
    }),
    type: DataType.STRING,
  })
  autoApprovalSettings!: CreationOptional<string>;

  @Column({ field: 'company_name', allowNull: false })
  companyName!: string;
}
