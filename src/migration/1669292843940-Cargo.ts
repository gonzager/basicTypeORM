import { MigrationInterface, QueryRunner } from "typeorm"
import { AppDataSource } from "../data-source"
import { CambioEstadoCargo } from "../entity/CambioEstadoCargo"
import { Cargo } from "../entity/Cargo"
import { DepartamentoJudicial } from "../entity/DepartamentoJudicial"
import { EstadoCargo } from "../entity/EstadoCargo"
import { Fuero } from "../entity/Fuero"
import { OrganismoJurisdiccional } from "../entity/OrganismoJurisdiccional"
import { TipoCargo } from "../entity/TipoCargo"

export class Cargo1669292843940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      let cargo = new Cargo()
      let tipoCargo = await queryRunner.manager.findOne(TipoCargo, {where: {descripcion: 'JUEZ DE PRIMERA INSTANCIA'}})
      let organismoJurisdiccional = await queryRunner.manager.findOne(OrganismoJurisdiccional, {where: {descripcion: 'ORGANISMO GENERAL PCIA. BS. AS'}})
      let departamentJudicial = await queryRunner.manager.findOne(DepartamentoJudicial, {where: {descripcion: 'Lomas de Zamora'}})
      let fuero =  await queryRunner.manager.findOne(Fuero, {where: {descripcion: 'Penal'}})
      let estadoCargo = await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'NO DESIGNADO'}})

      cargo.tipoCargo=tipoCargo
      cargo.organismoJurisdiccional = organismoJurisdiccional
      cargo.departamentoJudicial = departamentJudicial
      cargo.fuero=fuero
      cargo.estadoCargo = estadoCargo
      cargo.funciona =true
      cargo.numero=158
      cargo.sede = 'Judicial Lomas de Zamora - las heras'
    
      queryRunner.startTransaction()      
      await queryRunner.manager.save(cargo)
      let cambioEstadoCargo = new CambioEstadoCargo()
      cambioEstadoCargo.motivoVacancia='Estado Inicial No Designado'
      cambioEstadoCargo.detalle = 'Estado Inicial'
      cambioEstadoCargo.cargo = cargo
      cambioEstadoCargo.estadoCargoFin= estadoCargo
      queryRunner.manager.save(cambioEstadoCargo)
  
      cargo = new Cargo()
      tipoCargo = await queryRunner.manager.findOne(TipoCargo, {where: {descripcion: 'JUEZ DE PRIMERA INSTANCIA'}})
      organismoJurisdiccional = await queryRunner.manager.findOne(OrganismoJurisdiccional, {where: {descripcion: 'TRIBUNAL DE CASACION PENAL'}})
      departamentJudicial = await queryRunner.manager.findOne(DepartamentoJudicial, {where: {descripcion: 'La Plata'}})
      fuero =  await queryRunner.manager.findOne(Fuero, {where: {descripcion: 'Civil y Comercial'}})
      estadoCargo = await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'CUBIERTO'}})
      
      cargo.tipoCargo=tipoCargo
      cargo.organismoJurisdiccional = organismoJurisdiccional
      cargo.departamentoJudicial = departamentJudicial
      cargo.fuero=fuero
      cargo.estadoCargo = estadoCargo
      cargo.funciona =true
      cargo.numero= 87589
      cargo.sede = 'Sede La Plata'
      
      await queryRunner.manager.save(cargo)

      cambioEstadoCargo = new CambioEstadoCargo()
      cambioEstadoCargo.motivoVacancia='Estado Inicial No Designado'
      cambioEstadoCargo.detalle = 'Estado Inicial'
      cambioEstadoCargo.cargo = cargo
      cambioEstadoCargo.estadoCargoFin= await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'NO DESIGNADO'}})
      queryRunner.manager.save(cambioEstadoCargo)

      cambioEstadoCargo = new CambioEstadoCargo()
      cambioEstadoCargo.motivoVacancia='Estado Vacante'
      cambioEstadoCargo.detalle = 'Vacante'
      cambioEstadoCargo.cargo = cargo
      cambioEstadoCargo.estadoCargoInicial = await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'NO DESIGNADO'}})
      cambioEstadoCargo.estadoCargoFin= await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'VACANTE'}})
      queryRunner.manager.save(cambioEstadoCargo)

      cambioEstadoCargo = new CambioEstadoCargo()
      //cambioEstadoCargo.motivoVacancia='Estado Inicial No Designado'
      cambioEstadoCargo.detalle = 'Cubierto'
      cambioEstadoCargo.cargo = cargo
      cambioEstadoCargo.estadoCargoInicial = await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'VACANTE'}})
      cambioEstadoCargo.estadoCargoFin= await queryRunner.manager.findOne(EstadoCargo, {where: {descripcion: 'CUBIERTO'}})
      queryRunner.manager.save(cambioEstadoCargo)

      queryRunner.commitTransaction()

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
