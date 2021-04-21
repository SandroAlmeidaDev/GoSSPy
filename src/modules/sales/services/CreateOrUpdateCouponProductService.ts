import { inject, injectable } from 'tsyringe';
import { UpdateResult } from 'typeorm';

import CouponProduct from '../infra/typeorm/entities/CouponProduct';
import ICouponProductsRepository from '../repositories/ICouponProductsRepository';

interface IRequest {
  company_id: string;
  checkout_id: string;
  coupon_id: string;
  operator: number;
  coupon: number;
  erp_product_id: number;
  bar_code: number;
  quantity: number;
  unit_price: number;
  discount?: number;
  total_price: number;
  hour: string;
  sale_date: Date;
  erp_offer_id?: string;
  is_canceled: boolean;
  order: number;
  erp_customer_id?: number;
  erp_seller_id?: number;
  erp_department_id: number;
  aliquot_icms?: number;
  normal_price: number;
  type_price?: number;
  type_taxation: string;
  model_doc: string;
  motive_discount?: string;
  serie_nf: string;
  erp_promo_id?: string;
  erp_order_id?: string;
  bc_pis: number;
  bc_cofins: number;
}

@injectable()
class CreateOrUpdateCouponProductService {
  constructor(
    @inject('CouponsProductsRepository')
    private couponsProductsRepository: ICouponProductsRepository,
  ) {}

  public async execute(data: IRequest): Promise<CouponProduct | UpdateResult> {
    const checkCouponProductsExists = await this.couponsProductsRepository.findCouponProducts(
      data.company_id,
      data.checkout_id,
      data.coupon_id,
      data.erp_product_id,
      data.bar_code,
      data.order,
      data.operator,
      data.sale_date,
    );

    if (checkCouponProductsExists) {
      const saleCouponUpdated = await this.couponsProductsRepository.update(
        checkCouponProductsExists.id,
        data,
      );

      return saleCouponUpdated;
    }

    const checkoutSaleCoupon = await this.couponsProductsRepository.create(
      data,
    );

    return checkoutSaleCoupon;
  }
}

export default CreateOrUpdateCouponProductService;
