import { UpdateResult } from 'typeorm';
import CouponProduct from '../infra/typeorm/entities/CouponProduct';
import ICreateCouponProductDTO from '../dtos/ICreateCouponProductDTO';

export default interface ICouponProducstRepository {
  create(data: ICreateCouponProductDTO): Promise<CouponProduct>;
  update(id: string, data: ICreateCouponProductDTO): Promise<UpdateResult>;
  findById(id: string): Promise<CouponProduct | undefined>;
  findCouponProducts(
    company_id: string,
    checkout_id: string,
    coupon_id: string,
    erp_product_id: number,
    bar_code: number,
    order: number,
    operator: number,
    sale_date: Date,
  ): Promise<CouponProduct | undefined>;
}