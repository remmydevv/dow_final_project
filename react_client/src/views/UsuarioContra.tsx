import { Form, Link, redirect, type ActionFunctionArgs} from "react-router-dom"
import { CambiarContra } from "../services/UsuarioService"
import { useRef } from "react"

export async function action({params, request}: ActionFunctionArgs){
	const gmail = params.gmail
	if(!gmail){
		throw new Response('No se encontro el gmail!', {status: 400})
	}
	const formData = Object.fromEntries(await request.formData())
	const result = await CambiarContra(formData, String(gmail))
	if(!result?.success){
		return result
	}
	return redirect('/login')
}

export default function UsuarioContra(){
	const currentGmail = localStorage.getItem("gmail")
	const formRef = useRef<HTMLFormElement | null>(null)
    return (
        <>
        <h2>Cambiar Contraseña</h2>
			<div className="row">
				<div className="text-end">
					<Link to="/usuario"className="btn btn-sm btn-secondary">Volver a Usuarios</Link>
				</div>
			</div>
			<div className="card text-center ms-2 col-3">
				<div className="card-body">
					<Form method="PATCH" action= {`/usuario/contra/${currentGmail}`}ref={formRef}>
						<div className="mb-3">
							<label className="form-label" htmlFor="password">Nueva Contraseña</label>
							<input type="text" name="password" className="form-control" required />
						</div>
						<div className="mb-3">
							<button type="reset" className="btn btn-warning me-1">Restablecer</button>
							<button type="submit" className="btn btn-primary">Confirmar</button>
						</div>
					</Form>
				</div>
				
			</div>
        </>
    )
}