import { getRepository, Repository, UpdateResult } from 'typeorm';

import ICheckoutsTransactionsRepository from '@modules/sales/repositories/ICheckoutsTransactionsRepository';
import ICreateCheckoutTransactionDTO from '@modules/sales/dtos/ICreateCheckoutTransactionDTO';
import CheckoutTransaction from '../entities/CheckoutTransaction';

class CheckoutsTransactionsRepository
  implements ICheckoutsTransactionsRepository {
  private ormRepository: Repository<CheckoutTransaction>;

  constructor() {
    this.ormRepository = getRepository(CheckoutTransaction);
  }

  public async findTransaction(
    company_id: string,
    checkout_id: string,
    coupon: number,
    sale_date: Date,
  ): Promise<CheckoutTransaction | undefined> {
    const findTransactionCoupon = await this.ormRepository.findOne({
      where: {
        company_id,
        checkout_id,
        coupon,
        sale_date,
      },
    });

    return findTransactionCoupon;
  }

  public async create(
    data: ICreateCheckoutTransactionDTO,
  ): Promise<CheckoutTransaction> {
    const checkoutTransaction = this.ormRepository.create(data);

    await this.ormRepository.save(checkoutTransaction);

    return checkoutTransaction;
  }

  public async update(
    id: string,
    data: ICreateCheckoutTransactionDTO,
  ): Promise<UpdateResult> {
    const checkoutTransaction = await this.ormRepository.update(id, data);

    return checkoutTransaction;
  }

  public async findById(id: string): Promise<CheckoutTransaction | undefined> {
    const findTransactionCoupon = await this.ormRepository.findOne({
      where: { id },
    });

    return findTransactionCoupon;
  }
}

export default CheckoutsTransactionsRepository;