import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum CostGroupKey {
  SERVICE = 'SERVICE',
  REGION = 'REGION',
  PURCHASE_TYPE = 'PURCHASE_TYPE',
  LINKED_ACCOUNT = 'LINKED_ACCOUNT',
}

const TABLE_NAME = 'mawais__cost_performance';

export interface CostEntryAttributes {
  tenantId: number;
  groupKey1: CostGroupKey;
  groupValue1: string;
  groupKey2?: CostGroupKey;
  groupValue2?: string;
  month: string;
  amortizedCost: number;
}

/**
 * Cost instances need to be defined with the expected value of their `CostGroupDimension`.
 *
 * If it is left as a general `CostEntry<CostGroupDimension>`, then the groupKey is left with a type that is the union
 * of all three possible group key enums.
 */
@Table({
  tableName: TABLE_NAME,
  timestamps: false,
})
export class CostEntry extends Model<CostEntryAttributes> implements CostEntryAttributes {
  /* istanbul ignore next - can't call this function */
  @Column({
    primaryKey: true,
    allowNull: false,
    field: 'tenant_id',
  })
  tenantId!: number;

  @Column({
    allowNull: false,
    field: 'group_key_1',
  })
  groupKey1!: CostGroupKey;

  @Column({
    primaryKey: true,
    allowNull: false,
    field: 'group_value_1',
  })
  groupValue1!: string;

  @Column({
    allowNull: true,
    field: 'group_key_2',
  })
  groupKey2?: CostGroupKey;

  @Column({
    primaryKey: true,
    allowNull: true,
    type: DataType.STRING,
    field: 'group_value_2',
    get(this: Model<CostEntryAttributes>) {
      const rawValue = this.getDataValue('groupValue2');
      return rawValue ? rawValue : undefined;
    },
    set(this: Model<CostEntryAttributes>, value: string | undefined) {
      this.setDataValue('groupValue2', value ?? '');
    },
  })
  groupValue2?: string;

  @Column({
    primaryKey: true,
    type: DataType.DATEONLY,
    field: 'month',
  })
  month!: string;

  @Column({
    field: 'amortized_cost',
  })
  amortizedCost!: number;
}
