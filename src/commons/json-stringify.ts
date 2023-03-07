import { randomInt, randomUUID } from 'crypto';

const accountId = randomInt(10000, 100000).toString();
const alarmDescription = {
  awsAccount: accountId,
  awsRegion: 'us-east-1',
  finderFixerId: `dummy-${randomUUID()}`,
  resourceId: `res-${randomInt(10000, 100000).toString()}`,
  tenantId: '38895a45-99f1-4539-ab14-f0d16fdbed0c',
};
const cloudwatchAlarm = {
  AlarmName: 'Example alarm name',
  AlarmDescription: JSON.stringify(alarmDescription),
  AWSAccountId: '000000000000',
  NewStateValue: 'ALARM',
  NewStateReason: 'Threshold Crossed: 1 datapoint (10.0) was greater than or equal to the threshold (1.0).',
  StateChangeTime: '2017-01-12T16: 30: 42.236+0000',
  Region: 'EU - Ireland',
  OldStateValue: 'OK',
  Trigger: {
    MetricName: 'DeliveryErrors',
    Namespace: 'ExampleNamespace',
    Statistic: 'SUM',
    Dimensions: [],
    Period: 300,
    EvaluationPeriods: 1,
    ComparisonOperator: 'GreaterThanOrEqualToThreshold',
    Threshold: 1,
  },
};

console.log('cloudwatchAlarm ', JSON.stringify(cloudwatchAlarm));
