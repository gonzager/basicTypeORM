import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne, OneToMany, JoinTable } from 'typeorm'
import { CambioEstadoCargo } from './CambioEstadoCargo';
import { DepartamentoJudicial } from './DepartamentoJudicial';
import { EstadoCargo } from './EstadoCargo';
import { Fuero } from './Fuero';
import { OrganismoJurisdiccional } from './OrganismoJurisdiccional';
import { TipoCargo } from './TipoCargo';

@Entity()
export class Cargo {

    @PrimaryGeneratedColumn('identity')
    id: number

    @ManyToOne(()=>TipoCargo, (tipoCargo) => tipoCargo.id, {  nullable: false, createForeignKeyConstraints:true })
    tipoCargo: TipoCargo;

    @ManyToOne(()=>Fuero, fuero => fuero.id, { nullable: false, createForeignKeyConstraints:true })
    fuero: Fuero;

    @ManyToOne(()=>DepartamentoJudicial, departamentJudicial => departamentJudicial.id, { nullable: false, createForeignKeyConstraints:true })
    departamentoJudicial: DepartamentoJudicial 

    @ManyToOne(()=>OrganismoJurisdiccional, organismoJurisdiccional => organismoJurisdiccional.id, { nullable: false,createForeignKeyConstraints:true  })
    organismoJurisdiccional: OrganismoJurisdiccional

    @ManyToOne(()=> EstadoCargo, estadoCargo => estadoCargo.id, {nullable:false, createForeignKeyConstraints:true })
    estadoCargo: EstadoCargo

    @OneToMany(() => CambioEstadoCargo, cambioEstadoCargo => cambioEstadoCargo.cargo)
    cambiosEstadoCargo: Promise<CambioEstadoCargo []>

    @Column({nullable: false, default:true})
    funciona: Boolean

    @Column( {nullable: true})
    numero: number

    @Column({length: 255, nullable:true})
    sede: String

    @CreateDateColumn({type: 'timestamptz'})
    createdAt:Date

    @UpdateDateColumn({type: 'timestamptz'})
    updatedAd: Date 

}