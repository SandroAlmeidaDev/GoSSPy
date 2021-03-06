import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export default class CreateCheckoutsSalesCoupons1618431166793
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'checkouts_sales_coupons',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'company_id',
            type: 'uuid',
          },
          {
            name: 'checkout_id',
            type: 'uuid',
          },
          {
            name: 'operator',
            type: 'int',
          },
          {
            name: 'coupon',
            type: 'bigint',
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'origin',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sale_date',
            type: 'date',
          },
          {
            name: 'time_start',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'customer_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'customer_cpf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'customer_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'total_coupon',
            type: 'decimal',
            precision: 20,
            scale: 6,
          },
          {
            name: 'total_discount',
            type: 'decimal',
            precision: 20,
            scale: 6,
            isNullable: true,
          },
          {
            name: 'total_addition',
            type: 'decimal',
            precision: 20,
            scale: 6,
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'CompanyCheckoutsSalesCoupons',
            columnNames: ['company_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'companies',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'CheckoutsSalesCoupons',
            columnNames: ['checkout_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'checkouts',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      'checkouts_sales_coupons',
      new TableIndex({
        name: 'IDX_COUPON_UNIQUE',
        columnNames: [
          'company_id',
          'checkout_id',
          'operator',
          'coupon',
          'sale_date',
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('checkouts_sales_coupons');
  }
}
