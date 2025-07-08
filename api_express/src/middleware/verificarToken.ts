import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"


export function verificarToken (request: Request, response: Response, next: NextFunction){
    const aHeader = request.headers.authorization

    if (!aHeader || !aHeader.startsWith('Bearer ')){
        response.status(401).json({error: 'No se encontre el token!'})
    }

    const token = aHeader.split(' ')[1] //seleccionamos solo el token del string 
    const clave = process.env.SECRET_KEY!

    //aqui veremos si ese token esta generado desde nuestra clave secreta
    try {
        const decoded = jwt.verify(token, clave) //dos lineas continuas con () requiere ;
        ;(request as any).usuario = decoded
        next()
    } catch (error) {
        response.status(403).json({error: 'Token no valido o sesion expirada'})
    }
}   