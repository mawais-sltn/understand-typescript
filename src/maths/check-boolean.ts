const EsDI = {
  instanceType: 'm5.large.elasticsearch',
  instanceCount: 3,
  newInstanceType: 'm6g.large.elasticsearch',
  dedicatedMasterExists: false,
  newDedicatedMasterType: '',
  currentElasticSearchVersion: 'OpenSearch_1.1',
};

console.log('undefined == null ::', undefined == null);

console.log('undefined != null ::', undefined != null);

console.log('EsDI != null ::', EsDI != null);

console.log('null != null ::', null != null);

console.log('null == null ::', null == null);

const account = {
  approved: '236336985455',
  autoApproved: false,
};

console.log('account :', account.approved && !account.autoApproved);
