export enum FinderType {
  Ec2Retype = 'Ec2Retype',
  RdsRetype = 'RdsRetype',
  RdsOptimizeStorage = 'RdsOptimizeStorage',
  Reserved01 = 'Reserved01', // for testing only (automatic rollback)
  Reserved02 = 'Reserved02', // for testing only (manual rollback)
  Ec2IntelToAmd = 'Ec2IntelToAmd',
  Ec2LowRiskRightsize = 'Ec2LowRiskRightsize',
  Ec2CleanupIdleInstances = 'Ec2CleanupIdleInstances',
  EC2CleanupUnusedAMIs = 'EC2CleanupUnusedAMIs',
  Gp2Gp3 = 'Gp2Gp3',
  StandardToSIT = 'StandardToSIT',
  EfsIntelligentTiering = 'EfsIntelligentTiering',
  Es79Graviton = 'Es79Graviton',
  DynamoDbInfrequentAccess = 'DynamoDbInfrequentAccess',
  CloudFrontCompression = 'CloudFrontCompression',
  IoToGp3 = 'IoToGp3',
  AwsServiceCost = 'AwsServiceCost',
  DuplicateCloudTrail = 'DuplicateCloudTrail',
  EsOptimizeStorage = 'EsOptimizeStorage',
  UnusedEBSVolumes = 'UnusedEBSVolumes',
  InstallSSMAgentLinuxMacSSH = 'InstallSSMAgentLinuxMacSSH',
  ArchiveOldEbsVolumeSnapshots = 'ArchiveOldEbsVolumeSnapshots',
  InstallCloudWatchAgent = 'InstallCloudWatchAgent',
  VpcIdleNatGateway = 'VpcIdleNatGateway',
  ESWConsolidateVPCEndpoints = 'ESWConsolidateVPCEndpoints',
  FixVPCDNSForAgents = 'FixVPCDNSForAgents',
  InstallSSMAgentLinuxMac = 'InstallSSMAgentLinuxMac',
  FixVPCEndpointsforAgents = 'FixVPCEndpointsforAgents',
  FixInstanceProfileForAgents = 'FixInstanceProfileForAgents',
  VpcIdleEndpoint = 'VpcIdleEndpoint',
  LongStoppedEbsVolume = 'LongStoppedEbsVolume',
  NeptuneCleanupIdleClusters = 'NeptuneCleanupIdleClusters',
  FixCloudWatchAgentConfig = 'FixCloudWatchAgentConfig',
  S3DDBTrafficToGWEndpoint = 'S3DDBTrafficToGWEndpoint',
  UnusedElasticIps = 'UnusedElasticIps',
  ElbCleanUpIdle = 'ElbCleanUpIdle',
  RDSCleanupIdleClusters = 'RDSCleanupIdleClusters',
  RDSRightSizeMySqlClusters = 'RDSRightSizeMySqlClusters',
  OpenSearchRightSizeClusters = 'OpenSearchRightSizeClusters',
  QsRemoveIdleUser = 'QsRemoveIdleUser',
  KendraCleanupIdleIndexes = 'KendraCleanupIdleIndexes',
  EcCleanupIdleClusters = 'EcCleanupIdleClusters',
  FixSSMAgentAutoUpdate = 'FixSSMAgentAutoUpdate',
  DMSCleanupIdleInstances = 'DMSCleanupIdleInstances',
  RDSRightSizePostgresClusters = 'RDSRightSizePostgresClusters',
  AuroraInstancesToGraviton = 'AuroraInstancesToGraviton',
  EcsFargateOptimization = 'EcsFargateOptimization',
  Ec2EcsResizeManually = 'Ec2EcsResizeManually',
  AsgOptimization = 'AsgOptimization',
  RDSRIScanner = 'RDSRIScanner',
  RdsInstanceUpgrade = 'RdsInstanceUpgrade',
  Ec2AsgOptimizeManually = 'Ec2AsgOptimizeManually',
  Ec2ResizeManually = 'Ec2ResizeManually',
  Ec2EksOptimizeManually = 'Ec2EksOptimizeManually',
  Ec2GpuOptimization = 'Ec2GpuOptimization',
  Ec2ManuallyOptimizeMsSqlServerLicense = 'Ec2ManuallyOptimizeMsSqlServerLicense',
  Ec2EnableComputeOptimizer = 'Ec2EnableComputeOptimizer',
  EmrConsolidateAzInstances = 'EmrConsolidateAzInstances',
  EmrEnableManagedScaling = 'EmrEnableManagedScaling',
  EmrOptimizeInstances = 'EmrOptimizeInstances',
  EmrRetypeTasks = 'EmrRetypeTasks',
  EmrDeleteIdleClusters = 'EmrDeleteIdleClusters',
  EmrReserveInstances = 'EmrReserveInstances',
  RdsOptimizeProvisionedIops = 'RdsOptimizeProvisionedIops',
  RdsResizeStorage = 'RdsResizeStorage',
  RdsOptimizeInstances = 'RdsOptimizeInstances',
  RdsRetypeIoOptimized = 'RdsRetypeIoOptimized',
  RdsRetypeSingleAZ = 'RdsRetypeSingleAZ',
  MLStopIdleSagemakerNotebooks = 'MLStopIdleSagemakerNotebooks',
  MLResizeSagemaker = 'MLResizeSagemaker',
  MLDeleteIdleEndpoints = 'MLDeleteIdleEndpoints',
  MLDeleteIdleSagemakerModels = 'MLDeleteIdleSagemakerModels',
  MLDeleteIdleBedrockModels = 'MLDeleteIdleBedrockModels',
  /*
    When adding a new entry here, make sure to edit the ResourceTaggingService to make sure
    we support building the resource ARN string & getFinderInstance().
   */
}

export enum MetaFinders {
  Ec2Retype = 'Ec2Retype',
  RdsRetype = 'RdsRetype',
  RdsOptimizeStorage = 'RdsOptimizeStorage',
}

export enum FixerType {
  Archive = 'Archive',
  Consolidate = 'Consolidate',
  Delete = 'Delete',
  Enable = 'Enable',
  FixConfiguration = 'FixConfiguration',
  Install = 'Install',
  Optimize = 'Optimize',
  Reserve = 'Reserve',
  Resize = 'Resize',
  Retype = 'Retype',
  Scan = 'Scan',
  Collect = 'Collect',
  Stop = 'Stop',
}

export enum AwsServiceType {
  NA = 'NA',
  AWS = 'AWS',
  CloudFront = 'CloudFront',
  CloudTrail = 'CloudTrail',
  ComputeOptimizer = 'ComputeOptimizer',
  DatabaseMigrationService = 'DatabaseMigrationService',
  DynamoDb = 'DynamoDb',
  Ebs = 'Ebs',
  Ec2 = 'Ec2',
  ElastiCache = 'ElastiCache',
  ElasticFileSystem = 'Efs',
  ElasticIps = 'Eip',
  OpenSearch = 'OpenSearch',
  ElasticLoadBalancer = 'Elb',
  ElasticSearch = 'Es',
  Emr = 'Emr',
  Kendra = 'Kendra',
  Lambda = 'Lambda',
  NatGateway = 'Nat',
  Neptune = 'Neptune',
  QuickSight = 'QuickSight',
  Rds = 'Rds',
  RelationalDatabaseCluster = 'Rdscl',
  S3 = 'S3',
  Vpc = 'Vpc',
  VpcEndpoint = 'VpcEnd',
  VpcConnection = 'VpcCon',
  ML = 'ML',
}

export enum AwsTargetType {
  NA = 'na',
  Asg = 'Asg',
  AuroraMySQLClusters = 'AuroraMySQLClusters',
  AuroraToGraviton = 'AuroraToGraviton',
  AzInstances = 'AzInstances',
  CloudWatchAgents = 'CloudWatchAgents',
  Compression = 'Compression',
  ComputeOptimizer = 'ComputeOptimizer',
  Cost = 'Cost',
  DuplicateTrail = 'DuplicateTrail',
  Ecs = 'Ecs',
  EcsFargateTasks = 'EcsFargateTasks',
  Eks = 'Eks',
  EndpointsESW = 'EndpointsESW',
  Gp2Volumes = 'Gp2Volumes',
  Gpu = 'Gpu',
  IdleAMIs = 'IdleAMIs',
  IdleIndices = 'IdleIndices',
  IdleInstances = 'IdleInstances',
  IdleUsers = 'IdleUsers',
  IdleClusters = 'IdleClusters',
  IdleElasticIPAddresses = 'IdleElasticIPAddresses',
  IdleEndpoints = 'IdleEndpoints',
  IdleNATGateways = 'IdleNATGateways',
  IdleLoadBalancers = 'IdleLoadBalancers',
  IdleSagemakerNotebooks = 'IdleSagemakerNotebooks',
  IdleVolumes = 'IdleVolumes',
  Io1Io2Volumes = 'Io1Io2Volumes',
  Instances = 'Instances',
  InstancesIntelToAmd = 'InstancesIntelToAmd',
  InstancesToGraviton = 'InstancesToGraviton',
  InstanceProfiles = 'InstanceProfiles',
  IntelligentTiering = 'IntelligentTiering',
  DDBTrafficRedirect = 'DDBTrafficRedirect',
  LongStoppedVolumes = 'LongStoppedVolumes',
  ManagedScaling = 'ManagedScaling',
  MsSqlLicenses = 'MsSqlLicenses',
  MySqlClusters = 'MySqlClusters',
  OldVolumeSnapshots = 'OldVolumeSnapshots',
  PostgresClusters = 'PostgresClusters',
  ProvisionedIops = 'ProvisionedIops',
  ReserveInstances = 'ReserveInstances',
  SsmAgents = 'SsmAgents',
  SsmAgentsViaInstanceConnect = 'SsmAgentsViaInstanceConnect',
  Storage = 'Storage',
  Table = 'Table',
  Tasks = 'Tasks',
  Volumes = 'Volumes',
  VpcDns = 'VpcDns',
  VpcEndpoints = 'VpcEndpoints',
  IoOptimized = 'IoOptimized',
  SingleAZ = 'SingleAZ',
  Sagemaker = 'Sagemaker',
  IdleSagemakerModels = 'IdleSagemakerModels',
  IdleBedrockModels = 'IdleBedrockModels',
}

export enum RunbookType {
  Rollback = 'Rollback',
  DeleteCloudWatch = 'DeleteCloudWatch',
}

export enum EventType {
  COST_OPPORTUNITY = 'cost-opportunity',
  FINDER_VALIDATION = 'validation',
  FINDER_RECOMMENDATION = 'recommendation',
  FINDER_REJECTION = 'opportunity-rejected',
  FAILED_OPPORTUNITY = 'failed-validation',
  ACCOUNT_NOT_ONBOARDED = 'not-onboarded',
  COST_SAVINGS = 'cost-savings',
  REALIZED_SAVINGS = 'realized-savings',
  ROLLBACK_ALARM = 'rollback-alarm',
  ROLLBACK_EXECUTION = 'rollback-execution',
  OU_ONBOARDING = 'ou-onboarding',
  TRIAL_ONBOARDING = 'trial-onboarding',
  CENTRAL_TEMPLATE_APPROVAL_ONBOARDING = 'central-template-approval-onboarding',
  CENTRAL_TEMPLATE_APPROVAL_OFFBOARDING = 'central-template-approval-offboarding',
  ONBOARDING_EVENT = 'ou-resource-onboarding',
  OU_OFFBOARDING = 'ou-offboarding',
  TRIAL_OFFBOARDING = 'trial-offboarding',
  CW_DELETION = 'cloudwatch-deletion',
  FINDER_CUR_QUERY = 'finder-cur-query',
  ACCOUNT_FF_ONBOARDING = 'account-ff-onboarding',
  ACCOUNT_FF_UPDATE = 'account-ff-update',
  ACCOUNT_FF_OFFBOARDING = 'account-ff-offboarding',
  CHANGE_TEMPLATE_STATUS = 'change-template-status',
  RECOMMENDATION_PROMOTION = 'recommendation-promotion',

  //Tenant and user related
  TENANT_REGISTRATION = 'tenant-registration',
  USER_REGISTRATION = 'user-registration',
}

export enum RollbackExecutionStatus {
  MANUAL = 'manual',
  IN_COMPLETE = 'in-complete',
}

export enum ProcessingType {
  NEW = 'new',
  CHANGE_REQUEST = 'pre-cr-validation',
}

export enum LambdaTimeout {
  SECONDS_30 = 30,
  SECONDS_300 = 300,
  SECONDS_900 = 900,
}

export enum LambdaMemoryAndDisk {
  GB_2 = 2048,
  GB_3 = 3072,
  GB_4 = 4096,
  GB_5 = 5120,
  GB_6 = 6144,
}

export enum ResourceTag {
  FF_EXECUTION_DATE = 'cloudfix:executionDate',
  FF_FIXER_ID = 'cloudfix:fixerId',
  FF_FINDER_IDS = 'cloudfix:finderIds',
  FF_ORIGINAL_RESOURCE_ID = 'cloudfix:originalResourceId',
  FF_DONT_FIX_IT = 'cloudfix:dontFixIt',
  FF_NAME = 'cloudfix:name',
  FF_CLOUDFIX_NAME = 'Name',
  GENERAL_AWS_AUTOSCALING_GROUP_NAME = 'aws:autoscaling:groupName',
  GENERAL_AWS_ELASTICMAPREDUCE_JOB_FLOW_ID = 'aws:elasticmapreduce:job-flow-id',
  GENERAL_AWS_ELASTICMAPREDUCE_INSTANCE_GROUP_ROLE = 'aws:elasticmapreduce:instance-group-role',
  GENERAL_AWS_EKS_CLUSTER_NAME = 'aws:eks:cluster-name',
  GENERAL_AWS_CLOUDFORMATION_STACK_ID = 'aws:cloudformation:stack-id',
  GENERAL_AWS_MIGRATIONHUB_SOURCE_ID = 'aws:migrationhub:source-id',
  //GENERAL_AWS_CLOUDFORMATION_STACK_NAME = 'aws:cloudformation:stack-name',
  //GENERAL_AWS_EC2_FLEET_ID = 'aws:ec2:fleet-id',
}

export enum DeployActionsOps {
  UPDATE_YAML_FILES,
  CREATE_TICKET_ON_IT_FAILURE,
}

export const CLOUDFIX_PRODUCT_TAG = 'CloudFix';
export const OWNER_TAG_KEY = 'Owner';
export const OWNER_TAG_VALUE = 'fabianolucchese@devfactory.local';
export const AGE_TAG_KEY = 'CloudFix:age';

export const DEFAULT_MAINTENANCE_WINDOW = '0 22 * * 6';
export const DEFAULT_REGION = 'us-east-1';
/* c8 ignore start */
export const REGIONS = process.env.AVAILABLE_REGIONS?.split(',') ?? [DEFAULT_REGION];
export const CR_CREATION_REGION = DEFAULT_REGION;
export const TOPIC_REGION_IN_CDK = DEFAULT_REGION;
export const ATHENA_REGION = DEFAULT_REGION;
export const MANAGEMENT_ACCOUNT_REGION = DEFAULT_REGION;
export const BANNED_REGIONS = ['gov-', 'cn-'];

export const CLOUDFIX_SESSION = 'Cloudfix';
export const SESSION_DURATION_SECONDS = LambdaTimeout.SECONDS_900;
export const CACHE_TTL_FIVE_MINUTES = +(process.env.CACHE_TTL_MINUTE ?? LambdaTimeout.SECONDS_300);
export const DEFAULT_RETRY_BACKOFF = 5000;
/* c8 ignore end */
export const RETRY_BACKOFF = +(process.env.RETRY_BACKOFF ?? DEFAULT_RETRY_BACKOFF);
export const CUR_UPDATE_BLOCK_WINDOW = 24; // in hours
export const CLOUDFIX_CURR_STACK_VERSION = 4;
export const IT_APP_ENV = 'IT';

export const CUR_UPDATE_TOPIC_NAME = 'cur-update-topic';
export const RESOURCE_ACCOUNT_BENCHMARK_ROLE_ARN =
  'arn:aws:iam::438051315841:role/AmazonSSMRoleForBenchmarkInstancesQuickSetup';
export const RESOURCE_ACCOUNT_BENCHMARK_PROFILE_ARN =
  'arn:aws:iam::438051315841:instance-profile/AmazonSSMRoleForBenchmarkInstancesQuickSetup';

export type JSONValue = string | number | boolean | null | JSONObject | JSONValue[];
export type JSONObject = { [member: string]: JSONValue };
export type StringOrUndefined = string | undefined;
export type MakeNonOptional<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P];
};
export type StringOrNull = string | null;

/**
 * This will allow version strings that are 3 or 4 digits, instead of just 3, or upto 6, due
 * to a bug in Typescript. It should be clear that this is intended to be three positive
 * integers, and using it as-is should be fine for our purposes.
 */
export type VersionString = `${number}.${number}.${number}`;

export type TypeOrNull<T> = T | null;
export type TypeOrUndefined<T> = T | undefined;

export const FT_USER_NAME = /service\+\d+@app\.cloudfix\.com/;
