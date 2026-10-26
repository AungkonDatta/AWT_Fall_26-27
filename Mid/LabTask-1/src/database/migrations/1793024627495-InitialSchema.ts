import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1793024627495 implements MigrationInterface {
    name = 'InitialSchema1793024627495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "category" character varying(100) NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "phone" character varying(30) NOT NULL, "password" character varying(100) NOT NULL, "age" integer NOT NULL, "years_of_working" integer NOT NULL, CONSTRAINT "UQ_765bc1ac8967533a04c74a9f6af" UNIQUE ("email"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
