import axios from "../services/AxiosInstance"
import {  ArriendoFormSchema, ArriendosActivosSchema, ArriendosSchema, ArriendosTerminadosSchema } from "../types/Arriendo"
import { safeParse } from "valibot"


export async function getArriendos(){
    try {
        const url = '/arriendos'  //invocamos endpoint
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
        return[]
    }
}

type ArriendoFormData = {
    [k:string]: FormDataEntryValue
}
export async function arriendoCrear(formData: ArriendoFormData){
    try {
        const resultado = safeParse(ArriendoFormSchema, formData)
        if(resultado.success){
            const url = "/arriendos"
            await axios.post(url, resultado.output) /*{
                patenteVehiculo: resultado.output.patenteVehiculo,
                rutCliente: resultado.output.rutCliente,
                nombreCliente: resultado.output.nombreCliente,
                tipoVehiculo: resultado.output.tipoVehiculo,
                */ // podemos usar este metodo (de ir uno por uno) cuando mis datos tienen distintos names
                    // cuando en el formulario los datos tienen otro nombre a los de la api 
                //})
            return{success:true}
        }else{
            const errores: Record<string, string[]> ={}
            for(const issue of resultado.issues){
                const campo = issue.path![0].key as string
                if (!errores[campo]){
                    errores[campo] = []
                }
                errores [campo].push(issue.message)
            }
            return {success: false, error: 'Error en el campo del formulario.', errores}
        }
    } catch (error) {
        return {success: false, error:'Error en la creacion de Arriendo!'}
    }
}

export async function getArriendosActivos(){
    try {
        const url = '/arriendos/activos'
        const {data:arriendos} = await axios.get(url)

        const resultado = safeParse(ArriendosActivosSchema, arriendos.data)
        if(resultado.success){
            return resultado.output
        } else{
            throw new Error('Error al pedir arriendos activos')
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getArriendosTerminados(){
    try {
        const url ='/arriendos/terminados'
        const {data:arriendos} = await axios.get(url)

        const resultado = safeParse(ArriendosTerminadosSchema, arriendos.data)
        if(resultado.success){
            return resultado.output
        } else{
            throw new Error('Error al pedir arriendos activos')
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function borrarAriendo(arriendoId: number){
    try {
        const url = `/arriendos/${arriendoId}`
        await axios.delete(url)
        return {success:true}
    } catch (error) {
        return {success: false, error:('No se pudo eliminar el arriendo.')}
    }
}

export async function devolverArriendo (arriendoId: number){
    try {
        const url = `/arriendos/${arriendoId}`
        await axios.patch(url)
        return {success:true}
    } catch (error) {
        return {success:false, error:('Hubo un error al devolver arriendo')}
    }
}