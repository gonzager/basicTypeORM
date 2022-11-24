import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class DepartamentoJudicial {

    @PrimaryGeneratedColumn('identity')
    id: number

    @Column({length: 255})
    descripcion: string

}