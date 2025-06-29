import {Request, Response} from 'express'
import Arriendo from '../models/Arriendo'
import { col, fn, Op } from 'sequelize'



//lista todos los provisorios (categorias)
export const getArriendos = async (request: Request, response: Response) =>{
    const arriendos = await Arriendo.findAll()
    //response.json({data: arriendos})

    //await new Promise(resolve=> setTimeout(resolve, 10)) 
    response.json({data: arriendos})
}

export const getArriendosActivos = async (request: Request, response: Response) =>{
    const arriendos = await Arriendo.findAll({
        where: {fecha_fin: {[Op.is]: null}}
    })
    response.json({data: arriendos})
}
export const getArriendosTerminados = async (request: Request, response: Response) =>{
    const arriendos = await Arriendo.findAll({
        where: {fecha_fin:{[Op.not]: null}}
    })
    response.json({data:arriendos})
}



//lista todos los provisorios con cantidad de algo (producto))(categorias)
export const getArriendosTipoVehiculo = async (request: Request, response: Response) =>{
    const arriendos = await Arriendo.findAll({
        attributes:['tipo_vehiculo', [fn('COUNT', col('*')), 'cantidad']],
        group: ['tipo_vehiculo']
    })
    response.json({data: arriendos})
}


//Crea un arriendo 
export const crearArriendo = async (request: Request, response: Response) =>{
    const arriendoNuevo = await Arriendo.create({
        ...request.body,
        fechaInicio: new Date(), //fecha del sistema
        fechaFin: null
    })
    response.json({data: arriendoNuevo})
}

//Editar un provisorio (categoria)
export const devolverArriendo = async (request: Request, response: Response) =>{
    const {id} = request.params
    const arriendo = await Arriendo.findByPk(id)
    await arriendo.update({fechaFin: new Date()})  //!!!MUY IMPORTANTE USAR NOMBRES!!!
    response.json({data:arriendo})                 //!!DE LOS CAMPOS EN camelCase!!!
}                                                  //!!SEQUELIZE los transforma para la DB!!!

//Borrar un provisorio (categoria)
export const borrarArriendo = async (request: Request, response: Response) =>{
    const {id} = request.params //aqui se le puede cambiar ID y poner la variable que este en el endPoint
    const arriendo = await Arriendo.findByPk(id)
    await arriendo.destroy()
    response.json({data:'Arriendo borrado'})
}
