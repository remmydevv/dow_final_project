import { Form, Link, redirect, useActionData, type ActionFunctionArgs} from "react-router-dom";
import { arriendoCrear } from "../services/ArriendoService";
import { useRef } from "react";

export async function action({request}: ActionFunctionArgs){
	const formData = Object.fromEntries(await request.formData()) //sacamos data del form
	const resultado = await arriendoCrear(formData) //llamamos a la function que inserta los datos

	if (!resultado?.success){
		return resultado
	} 							
	return redirect('/arriendos')					//redireccionamos para ver el new listado
}


export default function CrearArriendo (){
	const actionData = useActionData() as {success?: boolean,
		error?: string,
		errores: {[key: string]: string[]}
	}
		  
	const formRef = useRef<HTMLFormElement | null>(null)

	const handleReset = ()=>{
		formRef.current?.reset()  //reseteamos el formulario 
	}

    return (
        <>	<div className="text-center">
            <h2>Nuevo Arriendo</h2>
			</div>
				<div className="text-end">
					<Link to="/arriendos"className="btn btn-sm btn-danger">Volver a Arriendos</Link>
				</div>
			<div className="card">
				<div className="card-body">
					{actionData?.error && (<div className="alert alert-danger">{actionData?.error}</div>)}
					<Form method="POST" ref={formRef}>
						<div className="mb-3">
							<label className="form-label" htmlFor="patenteVehiculo">Patente </label>
							<input type="text" className={`form-control ${actionData?.errores?.patenteVehiculo ? 'is-invalid' : ''}`} id="patenteVehiculo" name="patenteVehiculo" />
							{'patenteVehiculo' in (actionData?.errores|| {} ) && <div className="invalid-feedback">{actionData.errores?.patenteVehiculo[0]}</div>}
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="rutCliente">Rut cliente</label>
							{/* <input type="text" className="form-control is-invalid" id="rutCliente" name="rutCliente"  /> */}
							<input type="text" className={`form-control ${actionData?.errores?.rutCliente ? 'is-invalid' : ''}`} id="rutCliente" name="rutCliente"  />
							{'rutCliente' in (actionData?.errores|| {} ) && <div className="invalid-feedback">{actionData.errores?.rutCliente[0]}</div>}
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="nombreCliente">Nombre cliente </label>
							<input type="text"  className={`form-control ${actionData?.errores?.nombreCliente ? 'is-invalid' : ''}`} id="nombreCliente" name="nombreCliente"/>
							{'nombreCliente' in (actionData?.errores|| {} ) && <div className="invalid-feedback">{actionData.errores?.rutCliente[0]}</div>}
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="tipoVehiculo">Tipo Vehículo</label>
							<select className="form-select" id="tipoVehiculo" name="tipoVehiculo">
								<option value="">Seleccione una Categoría</option>
								<option value="SUV">SUV</option>
								<option value="Sedan">Sedan</option>
								<option value="Camioneta">Camioneta</option>
							</select>
						</div>
						<div className="mb-3 text-end">
							<button type="reset" className="btn btn-warning me-1" onClick={handleReset}>Restablecer</button>
							<button type="submit" className="btn btn-primary">Agregar arriendo</button>
						</div>
					</Form>
				</div>
			</div>
        </>
    )
}