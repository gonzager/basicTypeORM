import { MigrationInterface, QueryRunner } from 'typeorm'
import { OrganismoJurisdiccional } from '../entity/OrganismoJurisdiccional'
import { organismoJurisdiccionalSeed } from '../seed/OrganismoJurisdiccionalSeed'

export class OrganismoJurisdiccional1669290995779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tipoCargos = await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(OrganismoJurisdiccional)
        .values(organismoJurisdiccionalSeed)
        .execute()        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
