import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { Tenant } from './tenant';

export enum AwsAccountType {
  MASTER = 'MASTER',
  NORMAL = 'NORMAL',
}

export enum AwsAccountStatus {
  UNAVAILABLE = 'UNAVAILABLE',
  AVAILABLE = 'AVAILABLE',
  CONNECTED = 'CONNECTED',
}

const TABLE_NAME = 'mawais__aws_accounts';

@Table({
  tableName: TABLE_NAME,
  timestamps: false,
})
export class AwsAccount extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;

  @ForeignKey(() => Tenant)
  @Column({
    field: 'tenant_id',
    allowNull: false,
  })
  tenantId!: number;

  @BelongsTo(() => Tenant)
  tenant!: Tenant;

  @Column({
    field: 'external_id',
    allowNull: false,
  })
  externalId!: string;

  @Column({
    field: 'account_id',
    allowNull: false,
  })
  accountId!: string;

  @Column({
    field: 'account_nickname',
    allowNull: true,
  })
  accountNickname?: string;

  @Column({
    field: 'stack_name',
    allowNull: false,
  })
  stackName!: string;

  @Column({
    allowNull: false,
    defaultValue: AwsAccountType.MASTER,
  })
  type!: AwsAccountType;

  @Column({
    allowNull: false,
    defaultValue: AwsAccountStatus.CONNECTED,
  })
  status!: AwsAccountStatus;

  @Column({
    field: 'has_cri',
    allowNull: false,
    defaultValue: false,
  })
  hasCri!: boolean;

  @Column({
    field: 'created',
    type: DataType.DATE,
  })
  created!: Date;

  @UpdatedAt
  updated!: Date;

  @ForeignKey(() => AwsAccount)
  @Column({
    field: 'parent_account_id',
  })
  parentAccountId?: number;

  @BelongsTo(() => AwsAccount, {
    hooks: true,
    onDelete: 'cascade',
  })
  parentAccount?: AwsAccount;

  @Column({
    field: 'organization_arn',
    allowNull: false,
  })
  organizationArn!: string;
}
