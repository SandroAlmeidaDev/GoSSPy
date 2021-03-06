export default interface ICreateCheckoutSaleCouponDTO {
  file_path?: string;
  company_id: string;
  checkout_id: string;
  operator: number;
  coupon: number;
  status?: string;
  type: 'C' | 'D';
  origin: string;
  sale_date: Date;
  time_start?: string;
  customer_id?: string;
  customer_name?: string;
  total_coupon: number;
  total_discount?: number;
  total_addition?: number;
}
