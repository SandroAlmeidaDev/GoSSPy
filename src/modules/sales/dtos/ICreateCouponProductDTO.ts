export default interface ICreateCouponProductDTO {
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
  cancellation_type: string;
  order?: number;
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
