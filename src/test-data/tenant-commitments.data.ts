import { OfferingClass, OfferingType, PricingOfferingClass, ReservedInstance, Tenancy, Term } from '../sequelize/model';

export const criUsWest2 = [
  {
    accountId: '030835224743',
    region: 'us-west-2',
    id: 'b6ee7b24-700b-4b98-8380-decc06f9c5d1',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.NO_UPFRONT,
    term: Term.ONE_YEAR,
    expirationDate: new Date('2023-03-30T02:43:39.000Z'),
    instanceCount: 1,
    instanceType: 't4g.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: true,
    fixedPrice: 0,
    hourlyPrice: 0.003,
    effectiveHourlyPrice: 0.003,
  },
  {
    accountId: '030835224743',
    region: 'us-west-2',
    id: '15c17f3c-142c-4ed5-b323-8ba2ccfb4cd3',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.NO_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2025-01-06T17:55:48.000Z'),
    instanceCount: 1,
    instanceType: 't4g.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: true,
    fixedPrice: 0,
    hourlyPrice: 0.0021,
    effectiveHourlyPrice: 0.0021,
  },
  {
    accountId: '030835224743',
    region: 'us-west-2',
    id: '09974db3-ea24-45b3-aada-4405e50ba19a',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2023-01-14T20:02:05.000Z'),
    instanceCount: 5,
    instanceType: 'r4.large',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 1570,
    hourlyPrice: 0,
    effectiveHourlyPrice: 0.05974124809741248,
  },
];

export const criUsEast1 = [
  {
    accountId: '157147590138',
    region: 'us-east-1',
    id: '092bcd4b-c736-45f4-a7b0-f028143fe2f7',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.NO_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-06-28T06:32:10.000Z'),
    instanceCount: 1,
    instanceType: 't3a.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0023,
    effectiveHourlyPrice: 0.0023,
  },
  {
    accountId: '157147590138',
    region: 'us-east-1',
    id: 'ae94ee8e-0c98-434e-8430-59f500784dc1',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.NO_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2023-04-01T05:31:41.000Z'),
    instanceCount: 1,
    instanceType: 't4g.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0021,
    effectiveHourlyPrice: 0.0021,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '00a149c0-0d6b-4fa7-89c0-da8b7143c035',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 56,
    instanceType: 't2.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0029,
    effectiveHourlyPrice: 0.002625570776255708,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '00f1b16a-8b12-4b52-9060-72dc4a9a61ee',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 2,
    instanceType: 't3.xlarge',
    platform: 'Windows',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.1562,
    effectiveHourlyPrice: 0.14855403348554033,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '028fe58f-d1af-44b4-810f-881f8dae7fe9',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 1,
    instanceType: 'r5.24xlarge',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEDICATED,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 3.155,
    effectiveHourlyPrice: 2.8627473363774736,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '0301297f-0df6-4cba-885a-fccac88cca21',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 1,
    instanceType: 'c5.large',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.041,
    effectiveHourlyPrice: 0.03725266362252663,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '08275973-2377-4c97-a447-9714add491e4',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 1,
    instanceType: 'r6g.medium',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0264,
    effectiveHourlyPrice: 0.023896499238964992,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '099549c6-c8aa-4ade-9b6f-9b9d2aa9eb28',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 5,
    instanceType: 'm4.large',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0497,
    effectiveHourlyPrice: 0.04509132420091324,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '0ac6d809-34de-451c-9c82-cb2651ccf7e8',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 2,
    instanceType: 't3.xlarge',
    platform: 'Windows',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.1562,
    effectiveHourlyPrice: 0.14855403348554033,
  },
  {
    accountId: '572481847476',
    region: 'us-east-1',
    id: '0cdab602-bdd3-4251-adb6-8ea52fb1130f',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.ALL_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-05-01T00:00:39.000Z'),
    instanceCount: 1,
    instanceType: 'm5.large',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.049,
    effectiveHourlyPrice: 0.04417808219178082,
  },
];

export const criUsEast2 = [
  {
    accountId: '157147590138',
    region: 'us-east-2',
    id: '6ac13c42-1550-4436-a2a0-833d6e9db397',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.NO_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2023-04-01T05:31:41.000Z'),
    instanceCount: 1,
    instanceType: 't4g.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0021,
    effectiveHourlyPrice: 0.0021,
  },
  {
    accountId: '157147590138',
    region: 'us-east-2',
    id: '093007cb-de74-4c0b-a224-68f2bc9d22d3',
    offeringClass: OfferingClass.CONVERTIBLE,
    offeringType: OfferingType.NO_UPFRONT,
    term: Term.THREE_YEAR,
    expirationDate: new Date('2022-12-27T22:31:52.000Z'),
    instanceCount: 1,
    instanceType: 't3.nano',
    platform: 'Linux/UNIX',
    tenancy: Tenancy.DEFAULT,
    state: 'active',
    isCoin: false,
    fixedPrice: 0,
    hourlyPrice: 0.0026,
    effectiveHourlyPrice: 0.0026,
  },
];

export const ris: ReservedInstance[] = [...criUsWest2, ...criUsEast1, ...criUsEast2];

export const spUsEast1 = [
  {
    accountId: '157147590138',
    region: 'us-east-1',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't2',
    commitment: 0.023,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.THREE_YEAR,
    paymentOption: OfferingType.NO_UPFRONT,
    savingsPlanType: PricingOfferingClass.ConvertibleRI,
    expirationDate: new Date('2023-03-30T02:43:39.000Z'),
  },
  {
    accountId: '157147590138',
    region: 'us-east-1',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't4g',
    commitment: 0.045,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.THREE_YEAR,
    paymentOption: OfferingType.NO_UPFRONT,
    savingsPlanType: PricingOfferingClass.ConvertibleRI,
    expirationDate: new Date('2023-03-04T02:43:39.000Z'),
  },
  {
    accountId: '157147590138',
    region: 'us-east-1',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't2',
    commitment: 0.065,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.ONE_YEAR,
    paymentOption: OfferingType.ALL_UPFRONT,
    savingsPlanType: PricingOfferingClass.EC2ComputeSavingsPlans,
    expirationDate: new Date('2024-03-30T02:43:39.000Z'),
  },
];

export const spUsWest2 = [
  {
    accountId: '157147590138',
    region: 'us-west-2',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't2',
    commitment: 0.023,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.THREE_YEAR,
    paymentOption: OfferingType.NO_UPFRONT,
    savingsPlanType: PricingOfferingClass.ConvertibleRI,
    expirationDate: new Date('2023-03-30T02:43:39.000Z'),
  },
  {
    accountId: '157147590138',
    region: 'us-west-2',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't4g',
    commitment: 0.045,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.THREE_YEAR,
    paymentOption: OfferingType.NO_UPFRONT,
    savingsPlanType: PricingOfferingClass.ConvertibleRI,
    expirationDate: new Date('2023-03-04T02:43:39.000Z'),
  },
  {
    accountId: '157147590138',
    region: 'us-west-2',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't2',
    commitment: 0.065,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.ONE_YEAR,
    paymentOption: OfferingType.ALL_UPFRONT,
    savingsPlanType: PricingOfferingClass.EC2ComputeSavingsPlans,
    expirationDate: new Date('2024-03-30T02:43:39.000Z'),
  },
];

export const spUsEast2 = [
  {
    accountId: '157147590138',
    region: 'us-east-2',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't2',
    commitment: 0.023,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.THREE_YEAR,
    paymentOption: OfferingType.NO_UPFRONT,
    savingsPlanType: PricingOfferingClass.EC2ComputeSavingsPlans,
    expirationDate: new Date('2023-03-30T02:43:39.000Z'),
  },
  {
    accountId: '157147590138',
    region: 'us-east-2',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't4g',
    commitment: 0.045,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.THREE_YEAR,
    paymentOption: OfferingType.NO_UPFRONT,
    savingsPlanType: PricingOfferingClass.StandardRI,
    expirationDate: new Date('2023-03-04T02:43:39.000Z'),
  },
  {
    accountId: '157147590138',
    region: 'us-east-2',
    id: 'savings-plan-1',
    ec2InstanceFamily: 't2',
    commitment: 0.065,
    upfrontPaymentAmount: 15.65,
    recurringPaymentAmount: 5.36,
    term: Term.ONE_YEAR,
    paymentOption: OfferingType.ALL_UPFRONT,
    savingsPlanType: PricingOfferingClass.EC2InstanceSavingsPlans,
    expirationDate: new Date('2024-03-30T02:43:39.000Z'),
  },
];

export const savingPlans = [...spUsEast2, ...spUsEast1, ...spUsWest2];