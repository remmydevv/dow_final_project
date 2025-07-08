import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import Usuario from '../models/Usuario'
import jwt from 'jsonwebtoken'

export const logIn = async (request: Request, response: Response) =>{
    const {email, password} = request.body
    const clave = process.env.SECRET_KEY

    try {
        const usuario = await Usuario.findByPk(email)
        if(!usuario || !bcrypt.compareSync(password, usuario.password)){
            response.status(401).json({error: 'Ingrese una credencial correcta'})
        }
        const token = jwt.sign({email: usuario.email}, clave, {expiresIn: '2h'})
        response.json({token, gmail:usuario.email}) //muy importante los {} (asi manda en formato json)
    } catch (error) {
        console.error('Error en login: ', error)
        response.status(500).json({error: 'Ha ocurrido un error interno '})
    }

}


export const crearUsuario = async (request: Request, response: Response) =>{
    const {email, password} = request.body
    if(!email || !password){
        response.status(400).json({error: 'Email o Contraseña no validos!'})
        //es decir estan vacios por eso se !niega
    }
    try {
        const usuario = await Usuario.findByPk(email)
        if(usuario){
            response.status(409).json({error: 'Email no valido, ya esta registrado.'})
        }
        const nuevoUser = await Usuario.create({email, password}) // aqui el model lo cambia al hash!
        response.status(201).json({message: 'Usuario creado'})                                     //mensajes 200 indican exito
    } catch (error) {
        console.error('Error al crear usuario!', error)
        response.status(500).json({error: 'Error en el sistema!'})
    }

}

export const cambiarContra = async (request: Request, response: Response)=>{
    try {
        const {password} = request.body
        const {gmail} = request.params
        const user = await Usuario.findByPk(gmail)
        if(!user){
            response.status(404).json({error: 'Usuario no encontrado'})
        }
        const contraHasheada = await bcrypt.hash(password, 10)       //aqui hay q hashearla nosotros pq en el model lo hace al CREAR no al UPDATE    
        user.password = contraHasheada
        await user.save()
        response.status(201).json({message: 'Contraseña actualizada'})
    } catch (error) {
        console.error('Error al cambiar la contraseña', error)
        response.status(500).json({error: 'Error en el sistema'})
        
    }
}
