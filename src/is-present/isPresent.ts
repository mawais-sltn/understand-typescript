import { DescribeTableOutput } from 'aws-sdk/clients/dynamodb';
import { isPresent } from 'ts-is-present';

type TestData = {
  DomainId: string | undefined;
  DomainName: string | undefined;
};

const domains: Array<TestData> =
  [
    { DomainId: 'domain-id-1', DomainName: 'domain-name-1' },
    { DomainId: undefined, DomainName: 'domain-name-1' },
    { DomainId: 'domain-id-1', DomainName: undefined },
    { DomainId: undefined, DomainName: undefined },
  ] || [];

const definedResults = domains
  .filter((domain) => isPresent(domain.DomainName))
  .map((domain) => [domain.DomainName, domain] as [string, TestData]);

console.log(definedResults);

// const req = {
//   body: {},
//   headers: {},
//   event: {
//     requestContext: {
//       authorizer: {
//         tenantId: '12',
//       },
//     },
//   },
//   request: {
//     autoApprove: true,
//     finderName: '',
//     difficulty: 12,
//   },
// };

// console.log(
//   isPresent(req.request.difficulty) && isPresent(req.request.finderName)
// );
// console.log(
//   !isPresent(req.request.difficulty) && !isPresent(req.request.finderName)
// );

// console.log(
//   (isPresent(req.request.difficulty) && isPresent(req.request.finderName)) ||
//   (!isPresent(req.request.difficulty) && !isPresent(req.request.finderName))
// );

const tableA: DescribeTableOutput = {
  Table: {
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    TableName: 'testTable-mawais',
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    TableStatus: 'ACTIVE',
    ItemCount: 0,
    TableArn: 'arn:aws:dynamodb:us-east-1:438051315841:table/testTable-mawais',
    TableId: '2ef7c322-21a9-46c5-9bd9-1212d4298a9b',
    BillingModeSummary: {
      BillingMode: 'PAY_PER_REQUEST',
      LastUpdateToPayPerRequestDateTime: new Date('2022-11-20T08:58:21.189000+05:00'),
    },
  },
};

const tableB: DescribeTableOutput = {
  Table: {
    AttributeDefinitions: [
      {
        AttributeName: 'Id',
        AttributeType: 'S',
      },
      {
        AttributeName: 'Name',
        AttributeType: 'S',
      },
    ],
    TableName: 'ddb-use-provisioning-and-autoscaling-test',
    KeySchema: [
      {
        AttributeName: 'Id',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'Name',
        KeyType: 'RANGE',
      },
    ],
    TableStatus: 'ACTIVE',
    CreationDateTime: new Date('2022-11-17T13:45:31.846000+05:00'),
    ProvisionedThroughput: {
      NumberOfDecreasesToday: 0,
      ReadCapacityUnits: 8,
      WriteCapacityUnits: 8,
    },
    TableSizeBytes: 0,
    ItemCount: 0,
    TableArn: 'arn:aws:dynamodb:us-east-1:438051315841:table/ddb-use-provisioning-and-autoscaling-test',
    TableId: 'c8303f37-efcc-4cdb-b56e-f2e065147bab',
    BillingModeSummary: {
      BillingMode: 'PROVISIONED',
      LastUpdateToPayPerRequestDateTime: new Date('2022-11-17T13:45:31.846000+05:00'),
    },
  },
};

console.log('Table A ProvisionedThroughput ', !isPresent(tableA.Table?.ProvisionedThroughput));

console.log('Table B ProvisionedThroughput ', !isPresent(tableB.Table?.ProvisionedThroughput));
