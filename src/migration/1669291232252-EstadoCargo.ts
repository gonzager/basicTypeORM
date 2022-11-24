import { MigrationInterface, QueryRunner } from 'typeorm'
import { EstadoCargo } from '../entity/EstadoCargo'
import { estadoCargoSeed } from '../seed/EstadoCargoSeed'

export class EstadoCargo1669291232252 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tipoCargos = await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(EstadoCargo)
        .values(estadoCargoSeed)
        .execute()        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
