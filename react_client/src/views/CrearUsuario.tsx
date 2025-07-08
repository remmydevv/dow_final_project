import { Form, Link, redirect, type ActionFunctionArgs} from "react-router-dom";
import { useRef } from "react";
import { usuarioCrear } from "../services/UsuarioService";

export async function action({request}: ActionFunctionArgs){
	const formData = Object.fromEntries(await request.formData()) //sacamos data del form
	const resultado = await usuarioCrear(formData) //llamamos a la function que inserta los datos

	if (!resultado?.success){
		return resultado
	} 							
	return redirect('/login')					//redireccionamos para ver el new listado
}


export default function CrearArriendo (){
		  
	const formRef = useRef<HTMLFormElement | null>(null)

	const handleReset = ()=>{
		formRef.current?.reset()  //reseteamos el formulario 
	}

    return (
        <>	<div className="text-center">
            <h2>Nuevo Usuario</h2>
			</div>
				<div className="text-end">
					<Link to="/usuario"className="btn btn-sm btn-danger">Volver a Usuarios</Link>
				</div>
			<div className="card">
				<div className="card-body">
					<Form method="POST" ref={formRef}>
						<div className="mb-3">
							<label className="form-label" htmlFor="gmail">Ingrese Gmail</label>
							<input type="text" className="form-control" id="gmail" name="email" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="password">Crear Contraseña</label>
							<input type="text" className= "form-control"id="password" name="password"/>
						</div>
						<div className="mb-3 text-end">
							<button type="reset" className="btn btn-warning me-1" onClick={handleReset}>Restablecer</button>
							<button type="submit" className="btn btn-primary">Agregar Usuario</button>
						</div>
					</Form>
				</div>
			</div>
        </>
    )
}