import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Cargo } from './Cargo'
import { EstadoCargo } from './EstadoCargo'

@Entity()
export class CambioEstadoCargo {

    @PrimaryGeneratedColumn('identity')
    id: number

    @Column({type: 'timestamptz', default:'now()'})
    fecha: Date    

    @ManyToOne(() =>Cargo, cargo => cargo.id, { nullable: false, createForeignKeyConstraints:true })
    cargo: Cargo

    @ManyToOne(() =>EstadoCargo, estadoCargo => estadoCargo.id, { nullable: true, createForeignKeyConstraints:true })
    estadoCargoInicial: EstadoCargo

    @ManyToOne(() =>EstadoCargo, estadoCargo => estadoCargo.id, { nullable: false, createForeignKeyConstraints:true })
    estadoCargoFin: EstadoCargo

    @Column({ nullable: true} )
    motivoVacancia: string

    @Column({ nullable: true })
    detalle: string

    @Column({ nullable: true})
    archivo: string


}