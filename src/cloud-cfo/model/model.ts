import { InstanceType } from 'aws-sdk/clients/ec2';

export enum OfferingType {
  NO_UPFRONT = 'No Upfront',
  PARTIAL_UPFRONT = 'Partial Upfront',
  ALL_UPFRONT = 'All Upfront',
}

export enum PricingOfferingClass {
  OnDemand = 'OnDemand',
  StandardRI = 'standard',
  ConvertibleRI = 'convertible',
  EC2InstanceSavingsPlans = 'EC2InstanceSavingsPlans',
  EC2ComputeSavingsPlans = 'EC2ComputeSavingsPlans',
}

export enum OfferingClass {
  ON_DEMAND = 'OnDemand',
  STANDARD = 'standard',
  CONVERTIBLE = 'convertible',
}

/**
 * OfferingTerm.NA signifies on-demand pricing.
 */
export enum OfferingTerm {
  NA = 'na',
  Term1yr = '1yr',
  Term3yr = '3yr',
}

export enum Term {
  ONE_YEAR = '1yr',
  THREE_YEAR = '3yr',
}

export enum Tenancy {
  DEFAULT = 'default',
  DEDICATED = 'dedicated',
  HOST = 'host',
}

export interface IPT {
  instanceType: InstanceType;
  platform: string;
  tenancy: Tenancy;
}

export interface InstanceCountAndIPT extends IPT {
  instanceCount: number;
}

export interface ReservedInstancePrices {
  hourlyPrice: number;
  fixedPrice: number;
  effectiveHourlyPrice: number;
}

export interface OfferingData {
  offeringClass: OfferingClass;
  offeringType: OfferingType;
  term: Term;
}

/**
 * Has the offering data, the price, and the IPT. Effectively a reserved instance when it comes to calculations,
 * but does not identify what it 'belongs to' (account, region, id, etc.) or when it expires.
 */
export interface EffectiveReservedInstance extends InstanceCountAndIPT, OfferingData {
  effectiveHourlyPrice: number;
}

export interface ReservedInstance extends EffectiveReservedInstance, ReservedInstancePrices {
  accountId: string;
  region: string;
  id: string;
  expirationDate: Date;
  state: string;
  isCoin?: boolean;
}

export interface Ec2InstanceSavingsPlan {
  accountId: string;
  region: string;
  id: string;
  ec2InstanceFamily: string;
  commitment: number;
  upfrontPaymentAmount: number;
  recurringPaymentAmount: number;
  term: Term;
  paymentOption: OfferingType;
  savingsPlanType: SavingsPlanType;
  expirationDate: Date;
}

export type SavingsPlanType = 'Compute' | 'EC2Instance' | 'SageMaker' | string;
