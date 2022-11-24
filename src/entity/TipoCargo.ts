import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class TipoCargo {

    @PrimaryGeneratedColumn('identity')
    id: number

    @Column({length: 255})
    descripcion: string

}
