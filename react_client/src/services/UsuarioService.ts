import { safeParse } from "valibot"
import { UsuarioLoginSchema, UsuarioPasswordFormSchema } from "../types/Usuario"
import axios from "../services/AxiosInstance"

type UsuarioForm ={
    [k:string]: FormDataEntryValue
}

export async function login(formData: UsuarioForm){
    try {
        const result = safeParse(UsuarioLoginSchema, formData)
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/login`
            const {data} = await axios.post(url, result.output)
            localStorage.setItem('token', data.token)
            localStorage.setItem('gmail', data.gmail)

            return {success:true}
        } else{
            const errores: Record<string, string[]> ={}
            
            for(const issue of result.issues){
                const campo = issue.path![0].key as string
                if (!errores[campo]){
                    errores[campo] = []
                }
                errores[campo].push(issue.message) 
            }
            return {success: false, error: 'Error en el campo del formulario.', errores: errores}
        }
    } catch (error: any) {
        return{
            success:false,
            error: error.response?.data?.error ?? 'Error inesperado',
        }
    }
}
export async function usuarioCrear(formData: UsuarioForm){
    try {
        const resultado = safeParse(UsuarioLoginSchema, formData)
        if(resultado.success){
            const url = "/usuarios/crear"
            await axios.post(url, resultado.output) 
            return{success:true}
        }
    } catch (error) {
        return {success: false, error:'Error en la creacion de Nuevo usuario!'}
    }
}

export async function CambiarContra(formData: UsuarioForm, gmail: string){
    try {
        const result = safeParse(UsuarioPasswordFormSchema, formData)
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/usuarios/${gmail}`
            await axios.patch(url, {password: result.output.password})
            return {success: true}
        }
    } catch (error) {
        return {success: false, error: 'Error al cambiar la contraseña'}
    }
}