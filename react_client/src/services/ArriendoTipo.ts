import { safeParse } from "valibot"
import { ArriendosTipoVehiculo } from "../types/Arriendo"
import axios from "axios"

export async function getArriendosTipoVehiculo (){
    try {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/cantidad-tipo-vehiculo`
        const {data:arriendos} = await axios.get(url)

        const resultado = safeParse (ArriendosTipoVehiculo, arriendos.data)
        if(resultado){
            return resultado.output
        }else{
            throw new Error('Problema solicitud de datos')
        }
        
    } catch (error) {
        console.log(error)
    }
}