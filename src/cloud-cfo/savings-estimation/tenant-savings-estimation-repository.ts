import { Repository } from 'sequelize-typescript';

import { CreationAttributes, Op } from 'sequelize';

import { TenantSavingsEstimation } from '../tenant-savings-estimations';

export class TenantSavingsEstimationRepository {
  constructor(private readonly repository: Repository<TenantSavingsEstimation>) {}

  create(tenantSavingsEstimations: CreationAttributes<TenantSavingsEstimation>): Promise<TenantSavingsEstimation> {
    return this.repository.create(tenantSavingsEstimations);
  }

  async getEstimationsCalculatedAfter(calculatedAfter: Date): Promise<TenantSavingsEstimation[]> {
    return this.repository.findAll({
      where: {
        calculatedAt: {
          [Op.gt]: calculatedAfter,
        },
      },
    });
  }

  // async getEstimationsCalculatedInBetween(startDate: Date, endDate: Date): Promise<TenantSavingsEstimation[]> {

  //   if (!isPresent(this.repository.sequelize)) {
  //     throw new Error('Sequelize is not defined on the recommendationRepository.');
  //   }
  //   return await this.repository.sequelize.query(
  //     `
  //     SELECT
  //       *
  //     FROM
  //       tenant_savings_estimations
  //     WHERE calculated_at >= DATE_FORMAT(DATE_ADD(NOW(), INTERVAL - 14 DAY), '%y-%m-%d 00:00:00')
  //       AND calculated_at < DATE_FORMAT(DATE_ADD(NOW(), INTERVAL - 14 DAY), '%y-%m-%d 23:59:59')
  //     `,
  //     {
  //       model: TenantSavingsEstimation,
  //       type: QueryTypes.SELECT,
  //     }
  //   );
  // }

  async getEstimationsCalculatedInBetween(start: Date, end: Date): Promise<TenantSavingsEstimation[]> {
    return await this.repository.findAll({
      where: {
        calculatedAt: {
          [Op.gte]: new Date(),
          [Op.lte]: new Date(),
        },
      },
    });
  }

  async findOneByTenantId(tenantId: number): Promise<TenantSavingsEstimation | null> {
    return this.repository.findOne({
      where: { tenantId },
      order: [['id', 'DESC']],
      limit: 1,
    });
  }
}
