import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { FinderResource, FinderType, JSONObject } from '../ApplicationConstants';
import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

/**
 * Recommendation statuses can be thought of as actionable, non-actionable, or transitory.
 *
 * Actionable statuses are ones that can be applied: (SUGGESTED, MANUAL_APPROVAL).
 *
 * Transitory statuses are statuses that are related to a currently-being-applied recommendation:
 * (IN_PROGRESS, SCHEDULED, REVALIDATING), and COMPLETED but not finalized (no savingsFinalizedAt).
 *
 * The rest of the statuses are non-actionable, which means that a recommendation with one of those statuses
 * cannot be applied, or has already been applied.
 *
 * NEEDS_UPGRADE is not an actual recommendation status (not in RDS), and is only used for API and data-transfer purposes.
 */
export enum RecommendationStatus {
  SUGGESTED = 'Suggested',
  SCHEDULED = 'Scheduled',
  FAILED = 'Failed',
  COMPLETED = 'Completed',
  REJECTED = 'Rejected',
  IN_PROGRESS = 'In Progress',
  MANUAL_APPROVAL = 'Manual Approval',
  NO_LONGER_APPLICABLE = 'No Longer Applicable',
  NEEDS_UPGRADE = 'Needs Upgrade',
  RESOURCE_DELETED = 'Resource Deleted',
  RESOURCE_FIXED = 'Resource Fixed',
  MANUALLY_FIXED = 'Manually Fixed',
}

export interface IRecommendation {
  id: string;
  description: string;
  parameters: JSONObject;
  primaryImpactedNodeId: string;
  otherImpactedNodeIds: string[];
  applicationEnvironment: string;
  finderId: FinderType;
  type: FinderType;
  customerId: number;
  accountId: string;
  region: string;
  resourceId: string;
  resourceName: string;
  annualCost: number;
  annualSavings: number;
  actualSavings?: number;
  createdAt: Date;
  updatedAt: Date;
  scheduledAt?: Date;
  status: RecommendationStatus;
  changeRequestId?: string;
  changeRequestStatus?: string;
  inputData?: FinderResource;
  externalTaskId?: string;
  serviceUsage?: number;
  completedAt?: Date;
  executionStartAt?: Date;
  changeRequestSnsLatestTimestamp?: Date;
}

@Table({
  tableName: 'recommendation',
  timestamps: false,
})
export class Recommendation
  extends Model<InferAttributes<Recommendation>, InferCreationAttributes<Recommendation>>
  implements IRecommendation
{
  @PrimaryKey
  @Column(DataType.CHAR)
  id!: string;

  @Column(DataType.CHAR)
  description!: string;

  @Column(DataType.JSON)
  parameters!: JSONObject;

  @Column({ field: 'primary_impacted_node_id', type: DataType.CHAR })
  primaryImpactedNodeId!: string;

  @Column({ field: 'other_impacted_node_ids', type: DataType.JSON })
  otherImpactedNodeIds!: string[];

  @Column({ field: 'application_environment', type: DataType.CHAR })
  applicationEnvironment!: string;

  @Column({ field: 'finder_id', type: DataType.CHAR })
  finderId!: FinderType;

  @Column(DataType.CHAR)
  type!: FinderType;

  /**
   * A Foreign key of id field of the tenants table.
   */
  @Column({ field: 'customer', type: DataType.INTEGER })
  customerId!: number;

  @Column({ field: 'account', type: DataType.CHAR })
  accountId!: string;

  @Column(DataType.CHAR)
  region!: string;

  @Column({ field: 'resource_id', type: DataType.CHAR })
  resourceId!: string;

  @Column({ field: 'resource_name', type: DataType.CHAR })
  resourceName!: string;

  @Column({ field: 'annual_cost', type: DataType.DECIMAL })
  annualCost!: number;

  @Column({ field: 'annual_savings', type: DataType.DECIMAL })
  annualSavings!: number;

  @Column({ field: 'change_request_id', type: DataType.CHAR })
  changeRequestId?: CreationOptional<string>;

  @Column({ field: 'change_request_status', type: DataType.CHAR })
  changeRequestStatus?: CreationOptional<string>;

  @Column({ field: 'change_request_failure', type: DataType.CHAR, allowNull: true })
  changeRequestFailure?: CreationOptional<string | undefined | null>;

  @Column({ field: 'actual_savings', type: DataType.DECIMAL, allowNull: true })
  actualSavings?: CreationOptional<number>;

  @CreatedAt
  @Column({
    field: 'created_at',
    type: DataType.DATE,
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at',
    type: DataType.DATE,
  })
  updatedAt!: Date;

  @Column({
    field: 'scheduled_at',
    allowNull: true,
    type: DataType.DATE,
  })
  scheduledAt?: CreationOptional<Date>;

  @Column({
    allowNull: false,
    defaultValue: RecommendationStatus.SUGGESTED,
    type: DataType.CHAR,
  })
  status!: RecommendationStatus;

  @Column({
    field: 'savings_finalized_at',
    allowNull: true,
    type: DataType.DATE,
    defaultValue: null,
  })
  savingsFinalizedAt?: CreationOptional<Date>;

  @Column({
    field: 'monitoring_finalized_at',
    allowNull: true,
    type: DataType.DATE,
    defaultValue: null,
  })
  monitoringFinalizedAt?: CreationOptional<Date>;

  @Column({
    field: 'input_data',
    allowNull: true,
    defaultValue: null,
    type: DataType.JSON,
  })
  inputData!: FinderResource;

  @Column({
    field: 'service_usage',
    allowNull: true,
    type: DataType.DECIMAL,
  })
  serviceUsage?: CreationOptional<number>;

  @Column({
    field: 'completed_at',
    allowNull: true,
    type: DataType.DATE,
  })
  completedAt?: CreationOptional<Date>;

  @Column({
    field: 'execution_start_at',
    allowNull: true,
    type: DataType.DATE,
  })
  executionStartAt?: CreationOptional<Date>;

  @Column({
    field: 'change_request_sns_latest_timestamp',
    allowNull: true,
    type: DataType.DATE,
  })
  changeRequestSnsLatestTimestamp?: CreationOptional<Date>;

  @Column({ field: 'external_task_id', type: DataType.CHAR })
  externalTaskId?: string;
}
