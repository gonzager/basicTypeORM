import { MigrationInterface, QueryRunner } from 'typeorm'
import { TipoCargo } from '../entity/TipoCargo'
import { tipoCargoSeed } from '../seed/TipoCargo'

export class TipCargo1669290534966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tipoCargos = await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(TipoCargo)
        .values(tipoCargoSeed)
        .execute()

    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
