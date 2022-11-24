import { MigrationInterface, QueryRunner } from "typeorm"
import { DepartamentoJudicial } from "../entity/DepartamentoJudicial"
import { departamentoJudicialSeed } from "../seed/DepartamentoJudicialSeed"

export class DepartamentoJudicial1669291930250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const departamentoJudicial = await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(DepartamentoJudicial)
        .values(departamentoJudicialSeed)
        .execute()         
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
