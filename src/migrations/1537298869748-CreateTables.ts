import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1537298869748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "public"."users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(60) NOT NULL, "google_id" character varying(50) NOT NULL, "access_token" character varying(255) NOT NULL, "name" character varying(55) NOT NULL, "surname" character varying(55), "platform_id" integer, CONSTRAINT "UQ_12ffa5c867f6bb71e2690a526ce" UNIQUE ("email"), CONSTRAINT "UQ_ac51c24f81ae6fb54e85a829380" UNIQUE ("google_id"), CONSTRAINT "PK_a6cc71bedf15a41a5f5ee8aea97" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."platforms" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, CONSTRAINT "UQ_c1ea45dbe8468c35ddf5f1983e7" UNIQUE ("name"), CONSTRAINT "PK_93734e7032dc14b295b45c87a63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."sections" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(50) NOT NULL, "platform_id" integer, CONSTRAINT "PK_4357f87eda5d50f7fc1c40fb5f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."knowledges" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(150) NOT NULL, "section_id" integer, CONSTRAINT "PK_509a27767af4d527dd5dfa2b56f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."answers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "know" boolean NOT NULL, "apply" boolean NOT NULL, "want_learn" boolean NOT NULL, "user_id" integer NOT NULL, "knowledge_id" integer NOT NULL, CONSTRAINT "PK_dd5e0327615dcdb3ea5ea7edad6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "FK_755176ad134e2700e20694b7a5a" FOREIGN KEY ("platform_id") REFERENCES "public"."platforms"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."sections" ADD CONSTRAINT "FK_9c10d95189ae93e6450701c8d22" FOREIGN KEY ("platform_id") REFERENCES "public"."platforms"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."knowledges" ADD CONSTRAINT "FK_e3a7f3445ea8bc6174e9dd63ded" FOREIGN KEY ("section_id") REFERENCES "public"."sections"("id") ON DELETE SET NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD CONSTRAINT "FK_3ad1d84a29e6e1a99b2b2a488aa" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD CONSTRAINT "FK_4adde8e4354152b389d15832ef4" FOREIGN KEY ("knowledge_id") REFERENCES "public"."knowledges"("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP CONSTRAINT "FK_4adde8e4354152b389d15832ef4"`);
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP CONSTRAINT "FK_3ad1d84a29e6e1a99b2b2a488aa"`);
        await queryRunner.query(`ALTER TABLE "public"."knowledges" DROP CONSTRAINT "FK_e3a7f3445ea8bc6174e9dd63ded"`);
        await queryRunner.query(`ALTER TABLE "public"."sections" DROP CONSTRAINT "FK_9c10d95189ae93e6450701c8d22"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "FK_755176ad134e2700e20694b7a5a"`);
        await queryRunner.query(`DROP TABLE "public"."answers"`);
        await queryRunner.query(`DROP TABLE "public"."knowledges"`);
        await queryRunner.query(`DROP TABLE "public"."sections"`);
        await queryRunner.query(`DROP TABLE "public"."platforms"`);
        await queryRunner.query(`DROP TABLE "public"."users"`);
    }

}
