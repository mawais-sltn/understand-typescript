import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { CreationOptional, InferAttributes, InferCreationAttributes, NonAttribute } from 'sequelize';
import { Tenant } from './tenant';
import { OfferingType, PricingOfferingClass, Term } from './model';

const TABLE_NAME = 'tenant_commitments';

@Table({
  tableName: TABLE_NAME,
  timestamps: false,
})
export class TenantCommitment extends Model<
  InferAttributes<TenantCommitment>,
  InferCreationAttributes<TenantCommitment>
> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id!: CreationOptional<number>;

  @ForeignKey(() => Tenant)
  @Column({ field: 'tenant_id', allowNull: false })
  tenantId!: number;

  @Column({ type: DataType.DATEONLY, field: 'month', allowNull: false })
  month!: string;

  @Column({
    field: 'offering_class',
    allowNull: false,
    type: DataType.ENUM({ values: Object.keys(PricingOfferingClass) }),
  })
  offeringClass!: PricingOfferingClass;

  @Column({
    field: 'offering_type',
    allowNull: false,
    type: DataType.ENUM({ values: Object.keys(OfferingType) }),
  })
  offeringType!: OfferingType;

  @Column({
    field: 'term',
    allowNull: false,
    type: DataType.ENUM({ values: Object.keys(Term) }),
  })
  term!: Term;

  @Column({ field: 'hourly_commitment', allowNull: false })
  hourlyCommitment!: number;

  @Column({ field: 'remaining_commitment', allowNull: false })
  remainingCommitment!: number;

  @Column({ field: 'collected_at', allowNull: false, type: DataType.DATE, defaultValue: DataType.NOW })
  collectedAt!: CreationOptional<string>;

  @BelongsTo(() => Tenant)
  tenant!: NonAttribute<Tenant>;

  /* istanbul ignore next - decorator for model field */
  getTenant(): Promise<Tenant> {
    return (this as TenantCommitment).$get('tenant') as Promise<Tenant>;
  }
}
