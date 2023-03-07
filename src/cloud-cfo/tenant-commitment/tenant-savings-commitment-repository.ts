import { CreationAttributes } from 'sequelize/types/model';
import { Repository } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { TenantCommitment } from '../tenant-commitment';

export class TenantCommitmentRepository {
  constructor(private readonly repository: Repository<TenantCommitment>) {}

  create(tenantCommitment: CreationAttributes<TenantCommitment>): Promise<TenantCommitment> {
    return this.repository.create(tenantCommitment);
  }

  async getTenantCommitmentCollectedAfter(collectedAfter: Date): Promise<TenantCommitment[]> {
    return this.repository.findAll({
      where: {
        collectedAt: {
          [Op.gt]: collectedAfter,
        },
      },
    });
  }
}
