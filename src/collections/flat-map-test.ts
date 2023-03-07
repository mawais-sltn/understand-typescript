const accounts = [
  {
    id: 1,
    accountName: 'VDI',
    accountId: '572481847476',
    seedRegions: [
      {
        code: 'us-east-2',
        name: 'US East (Ohio)',
        active: true,
        disabled: false,
      },
      {
        code: 'us-east-1',
        name: 'US East (N. Virginia)',
        active: true,
        disabled: false,
      },
      {
        code: 'us-west-1',
        name: 'US West (N. California)',
        active: true,
        disabled: false,
      },
      {
        code: 'us-west-2',
        name: 'US West (Oregon)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-northeast-3',
        name: 'Asia Pacific (Osaka-Local)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-northeast-2',
        name: 'Asia Pacific (Seoul)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-southeast-1',
        name: 'Asia Pacific (Singapore)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-southeast-2',
        name: 'Asia Pacific (Sydney)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-northeast-1',
        name: 'Asia Pacific (Tokyo)',
        active: true,
        disabled: false,
      },
      {
        code: 'ca-central-1',
        name: 'Canada (Central)',
        active: true,
        disabled: false,
      },
      {
        code: 'eu-central-1',
        name: 'EU (Frankfurt)',
        active: true,
        disabled: false,
      },
      {
        code: 'eu-west-1',
        name: 'EU (Ireland)',
        active: true,
        disabled: false,
      },
      {
        code: 'eu-west-2',
        name: 'EU (London)',
        active: true,
        disabled: false,
      },
      {
        code: 'eu-west-3',
        name: 'EU (Paris)',
        active: true,
        disabled: false,
      },
      {
        code: 'eu-north-1',
        name: 'EU (Stockholm)',
        active: true,
        disabled: false,
      },
      {
        code: 'sa-east-1',
        name: 'South America (Sao Paulo)',
        active: true,
        disabled: false,
      },
      {
        code: 'af-south-1',
        name: 'Africa (Cape Town)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-east-1',
        name: 'Asia Pacific (Hong Kong)',
        active: true,
        disabled: false,
      },
      {
        code: 'ap-south-1',
        name: 'Asia Pacific (Mumbai)',
        active: true,
        disabled: false,
      },
      {
        code: 'cn-north-1',
        name: 'China (Beijing)',
        active: true,
        disabled: false,
      },
      {
        code: 'cn-northwest-1',
        name: 'China (Ningxia)',
        active: true,
        disabled: false,
      },
      {
        code: 'eu-south-1',
        name: 'EU (Milan)',
        active: true,
        disabled: false,
      },
      {
        code: 'me-south-1',
        name: 'Middle East (Bahrain)',
        active: true,
        disabled: false,
      },
      {
        code: 'us-gov-west-1',
        name: 'AWS GovCloud (US-West)',
        active: true,
        disabled: false,
      },
      {
        code: 'us-gov-east-1',
        name: 'AWS GovCloud (US-East)',
        active: true,
        disabled: false,
      },
    ],
  },
  {
    id: 13,
    accountName: 'Dev-DevFactory-awsrimarketplace2',
    accountId: '805405677443',
    seedRegions: [],
  },
  {
    id: 261,
    accountName: 'Exp-CentralFunctions-ribus3',
    accountId: '644577718522',
    seedRegions: [],
  },
  {
    id: 262,
    accountName: 'Exp-CentralFunctions-ribus4',
    accountId: '094224534172',
    seedRegions: [],
  },
  {
    id: 263,
    accountName: 'Exp-CentralFunctions-ribus5',
    accountId: '422129812854',
    seedRegions: [],
  },
  {
    id: 264,
    accountName: 'Exp-CentralFunctions-ribus2',
    accountId: '333565286543',
    seedRegions: [],
  },
];

const flatDate = accounts.flatMap((account) => account.seedRegions);

console.log(flatDate);
