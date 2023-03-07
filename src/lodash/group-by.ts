import { groupBy } from 'lodash';
import { FinderType } from '../cloud-fix/ApplicationConstants';
import { IRecommendation } from '../cloud-fix/models/Recommendation.model';

const mockIRecommendations = [
  {
    accountId: '74',
    region: 'us-east-1',
    parameters: { a: 1 },
    type: FinderType.StandardToSIT,
    resourceId: 'standardtosit-test-bucket',
    customerId: 1,
  },
  {
    accountId: '74',
    region: 'us-east-1',
    parameters: { b: 2 },
    type: FinderType.EfsIntelligentTiering,
    resourceId: 'arn:aws:elasticfilesystem:us-east-1:580091663460:file-system/fs-461c8eb3',
    customerId: 1,
  },
  {
    accountId: '74',
    region: 'us-west-2',
    parameters: { c: 3 },
    type: FinderType.StandardToSIT,
    resourceId: 'test-services-beta-product-413',
    customerId: 1,
  },
  {
    accountId: '75',
    region: 'us-east-1',
    parameters: { d: 4 },
    type: FinderType.EfsIntelligentTiering,
    resourceId: 'arn:aws:elasticfilesystem:us-east-1:610092376560:file-system/fs-e6142b52',
    customerId: 1,
  },
  {
    accountId: '74',
    region: 'us-east-1',
    parameters: { e: 5 },
    type: FinderType.Es79Graviton,
    resourceId: 'xo-assesment-kpap',
    customerId: 1,
  },
  {
    accountId: '74',
    region: 'us-east-1',
    parameters: { f: 6 },
    type: FinderType.Es79Graviton,
    resourceId: 'aws-ms-integ-search-es',
    customerId: 1,
  },
  {
    accountId: '75',
    region: 'us-east-1',
    parameters: { g: 7 },
    type: FinderType.EfsIntelligentTiering,
    resourceId: 'arn:aws:elasticfilesystem:us-east-1:438051315841:file-system/fs-0968dcbf2ec373bf1',
    customerId: 1,
  },
  {
    accountId: '74',
    region: 'us-west-2',
    parameters: { h: 8 },
    type: FinderType.StandardToSIT,
    resourceId: 'test-services-beta-product-402',
    customerId: 1,
  },
] as unknown as IRecommendation[];

const groupedRecommendations = groupBy(mockIRecommendations, (recommendation) => {
  const { type, accountId, region } = recommendation;
  const field: string = [type, accountId, region].join('|');
  return field;
});

console.log(groupedRecommendations);
