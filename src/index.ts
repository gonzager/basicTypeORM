import { AppDataSource } from './data-source'
import { Cargo } from './entity/Cargo';
import * as fs from 'fs';


AppDataSource.initialize().then(async () => {
    try {
        console.log('Corriendo las Migraciones...')
        await AppDataSource.runMigrations();
        console.log('Fin de las Migraciones...')
        
        const [cargos, count] = await AppDataSource.manager.findAndCount(Cargo, {relations: {tipoCargo:true, fuero:true, organismoJurisdiccional:true, departamentoJudicial:true,estadoCargo:true,cambiosEstadoCargo:true}} )
        
        console.log('Salvando lo registros...')
        const data = {count: count, data:JSON.parse(JSON.stringify(cargos))}
        await fs.promises.writeFile('./src/json/cargosFake.json', JSON.stringify(data))
    } catch(err) {
        console.error(err)
    }
}).catch(error => console.log(error))
