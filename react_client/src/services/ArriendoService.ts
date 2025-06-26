import axios from "axios"
import { ArriendosSchema } from "../types/Arriendo"
import { safeParse } from "valibot"

export async function getArriendos(){
    try {
        const url = "http://localhost:3000/api/arriendos"  //invocamos endpoint
        const {data:arriendos} = await axios.get(url)  //recibimos los datos en arriendos
        //valibot revisa esto con success
        const resultado = safeParse(ArriendosSchema, arriendos.data)  //revisamos q cumpla con la estructura deseada
        if(resultado.success){
            return resultado.output
        } else{
            throw new Error('Problema con la solicitud de datos')
        }
    } catch (error) {
        console.log(error)
    }
}