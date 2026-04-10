import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWatchlistSyncRemoveSetting1776000000000 implements MigrationInterface {
  name = 'AddWatchlistSyncRemoveSetting1776000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "watchlistSyncRemove" boolean`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "watchlistSyncRemove"`
    );
  }
}
