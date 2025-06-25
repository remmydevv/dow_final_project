import {Request, Response} from 'express'

export const getAuxi = async (request: Request, response: Response) =>{
    response.json('ESTE ES UN ENDPOINT AUXILIAR ===POR AHORA===')
}