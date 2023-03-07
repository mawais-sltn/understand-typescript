import { Repository } from 'sequelize-typescript';
import { CostEntry, CostEntryAttributes, CostGroupKey } from '../cost-entry';
import { Op, WhereOptions } from 'sequelize';
import { isPresent } from 'ts-is-present';

export class CostEntryRepository {
  constructor(private readonly repository: Repository<CostEntry>) {}

  /**
   * Not used or tested. Left here for reference.
   */
  async create(cost: CostEntryAttributes): Promise<CostEntry> {
    return await this.repository.create(cost);
  }

  async searchCostPerformanceData(
    tenantId: number,
    groupKey1: CostGroupKey,
    groupKey2?: CostGroupKey,
    startDate?: string,
    endDate?: string,
  ): Promise<CostEntry[]> {
    return this.repository.findAll({
      where: {
        tenantId,
        groupKey1,
        ...(groupKey2 && {
          groupKey2,
        }),

        // ...(startDate && !endDate && {
        //     month: {
        //         [Op.gte]: startDate,
        //         [Op.lte]: startDate
        //     },
        // }),
        // ...(!startDate && endDate && {
        //     month: {
        //         [Op.gte]: startOfMonth(new Date(endDate)),
        //         [Op.lte]: endDate
        //     },
        // }),
        ...(startDate &&
          endDate && {
            month: {
              [Op.gte]: startDate,
              [Op.lte]: endDate,
            },
          }),
      },
    });
  }

  async getByTenantIdAndGroupKeys(
    tenantId: number,
    groupKey1: CostGroupKey,
    groupKey2: CostGroupKey | undefined,
  ): Promise<CostEntry[]> {
    let where: WhereOptions<CostEntryAttributes> = {
      tenantId,
      groupKey1,
    };

    if (isPresent(groupKey2)) {
      where = {
        ...where,
        groupKey2,
      };
    }

    return this.repository.findAll({ where });
  }
}
