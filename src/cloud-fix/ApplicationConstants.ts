export enum FinderType {
  Reserved01 = 'Reserved01', // for testing only (automatic rollback)
  Reserved02 = 'Reserved02', // for testing only (manual rollback)
  Ec2IntelToAmd = 'Ec2IntelToAmd',
  Ec2LowRiskRightsize = 'Ec2LowRiskRightsize',
  Ec2CleanupIdleInstances = 'Ec2CleanupIdleInstances',
  EC2CleanupUnusedAMIs = 'EC2CleanupUnusedAMIs',
  Ec2MigrateNonProdToSpot = 'Ec2MigrateNonProdToSpot',
  EC2UpdateSSMAgentLinux = 'EC2UpdateSSMAgentLinux',
  EC2ASGSwitchToSpot = 'EC2ASGSwitchToSpot',
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
  MoveNATTrafficToVPCEndpoints = 'MoveNATTrafficToVPCEndpoints',
  VpcIdleNatGateway = 'VpcIdleNatGateway',
  ESWConsolidateVPCEndpoints = 'ESWConsolidateVPCEndpoints',
  InstallSSMAgentWindows = 'InstallSSMAgentWindows',
  FixVPCDNSForAgents = 'FixVPCDNSForAgents',
  InstallSSMAgentLinuxMac = 'InstallSSMAgentLinuxMac',
  FixSecurityGroupsForAgents = 'FixSecurityGroupsForAgents',
  FixVPCRouteTableForAgents = 'FixVPCRouteTableForAgents',
  FixNACLForAgents = 'FixNACLForAgents',
  FixVPCEndpointsforAgents = 'FixVPCEndpointsforAgents',
  FixInstanceProfileForAgents = 'FixInstanceProfileForAgents',
  VpcIdleEndpoint = 'VpcIdleEndpoint',
  LongStoppedEbsVolume = 'LongStoppedEbsVolume',
  NeptuneCleanupIdleClusters = 'NeptuneCleanupIdleClusters',
  FixCloudWatchAgentConfig = 'FixCloudWatchAgentConfig',
  RDSReserveClusterInstances = 'RDSReserveClusterInstances',
  EfsCleanupIdleFileSystems = 'EfsCleanupIdleFileSystems',
  S3DDBTrafficToGWEndpoint = 'S3DDBTrafficToGWEndpoint',
  UnusedElasticIps = 'UnusedElasticIps',
  DynamoDbProvisioning = 'DynamoDbProvisioning',
  DDBUseAutoscaling = 'DDBUseAutoscaling',
  OpenSearchReserveClusterInstances = 'OpenSearchReserveClusterInstances',
  ElbCleanUpIdle = 'ElbCleanUpIdle',
  RDSCleanupIdleClusters = 'RDSCleanupIdleClusters',
  OpenSearchCleanupIdleClusters = 'OpenSearchCleanupIdleClusters',
  RDSRightSizeMySqlClusters = 'RDSRightSizeMySqlClusters',
  OpenSearchRightSizeClusters = 'OpenSearchRightSizeClusters',
  VPCConsolidateNATGateways = 'VPCConsolidateNATGateways',
  QsRemoveIdleUser = 'QsRemoveIdleUser',
  LambdatoGraviton = 'LambdatoGraviton',
  KendraCleanupIdleIndexes = 'KendraCleanupIdleIndexes',
  EcCleanupIdleClusters = 'EcCleanupIdleClusters',
  FixSSMAgentAutoUpdate = 'FixSSMAgentAutoUpdate',
  DMSCleanupIdleInstances = 'DMSCleanupIdleInstances',
  SgmIdleEndpoint = 'SgmIdleEndpoint',
  EbsRightSizeVolumes = 'EbsRightSizeVolumes',
  RDSRightSizePostgresClusters = 'RDSRightSizePostgresClusters',
  AuroraInstancesToGraviton = 'AuroraInstancesToGraviton',
  S3GlueFragmentation = 'S3GlueFragmentation',
  /*
      When adding a new entry here, make sure to edit the ResourceGroupsTaggingService to make sure
      we support building the resource ARN string.
     */
}

export type JSONValue = string | number | boolean | null | JSONObject | JSONValue[];
export type JSONObject = { [member: string]: JSONValue };
export type StringOrUndefined = string | undefined;

export class FinderResource {
  resourceId: string;
  resourceName: string;
  awsAccount: string;
  awsRegion: string;
  publicAnnualCost: number;
  annualCost: number;
  changeRequestId?: string;
  recommendationId?: string;

  constructor(row: AthenaRow) {
    this.resourceId = row['resource_id'];
    this.resourceName = row['resource_name'];
    this.awsAccount = row['account_id'];
    this.awsRegion = row['region'];
    this.publicAnnualCost = +row['annualized_public_cost'];
    this.annualCost = +row['annualized_amortized_cost'];
  }
}

export interface AthenaRow {
  [key: string]: string;
}
