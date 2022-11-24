import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class EstadoCargo {

    @PrimaryGeneratedColumn('identity')
    id: number

    @Column({length: 255})
    descripcion: string
    
    @Column()
    esVacancia: Boolean

    @Column({default: false})
    esInicial: Boolean

}