import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { CreationOptional, InferAttributes, InferCreationAttributes, NonAttribute } from 'sequelize';

import { Tenant } from './tenant';

const TABLE_NAME = 'tenant_savings_estimations';

export type TenantSavingsEstimationCreationAttr = InferCreationAttributes<TenantSavingsEstimation>;

@Table({
  tableName: TABLE_NAME,
  timestamps: false,
})
export class TenantSavingsEstimation extends Model<
  InferAttributes<TenantSavingsEstimation>,
  TenantSavingsEstimationCreationAttr
> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id!: CreationOptional<number>;

  @ForeignKey(() => Tenant)
  @Column({ field: 'tenant_id', allowNull: false })
  tenantId!: number;

  @Column({ field: 'calculated_at', allowNull: false, type: DataType.DATE, defaultValue: DataType.NOW })
  @CreatedAt
  calculatedAt!: CreationOptional<string>;

  @Column({ field: 'estimated_hourly_saving', allowNull: false })
  estimatedHourlySaving!: number;

  @Column({ field: 'cri_hourly_investment', allowNull: false })
  criHourlyInvestment!: number;

  @Column({ field: 'current_on_demand_cost', allowNull: false })
  currentOnDemandCost!: number;

  @Column({ field: 'current_cri_cost', allowNull: false })
  currentCriCost!: number;

  @Column({ field: 'current_cri_wastage', allowNull: false })
  currentCriWastage!: number;

  @Column({ field: 'optimized_on_demand_cost', allowNull: false })
  optimizedOnDemandCost!: number;

  @Column({ field: 'optimized_cri_cost', allowNull: false })
  optimizedCriCost!: number;

  @Column({ field: 'optimized_cri_wastage', allowNull: false })
  optimizedCriWastage!: number;

  @BelongsTo(() => Tenant)
  tenant!: NonAttribute<Tenant>;

  /* istanbul ignore next - decorator for model field */
  getTenant(): Promise<Tenant> {
    return (this as TenantSavingsEstimation).$get('tenant') as Promise<Tenant>;
  }
}
