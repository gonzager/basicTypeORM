import {  MigrationInterface, QueryRunner } from 'typeorm'
import { Fuero } from '../entity/Fuero'
import  {fueroSeed}  from '../seed/FueroSeed'

export class FueroSeed1669228514723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const fueros = await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(Fuero)
        .values(fueroSeed)
        .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
