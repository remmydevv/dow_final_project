import { Form, Link, redirect, type ActionFunctionArgs} from "react-router-dom";
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
	const formRef = useRef<HTMLFormElement | null>(null)

	const handleReset = ()=>{
		formRef.current?.reset()  //reseteamos el formulario 
	}

    return (
        <>
            <h2>Crear Producto</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="#">Inicio</a></li>
							<li className="breadcrumb-item"><a href="#">Productos</a></li>
							<li className="breadcrumb-item active" aria-current="page">Agregar Producto</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<Link to="/arriendos"className="btn btn-sm btn-secondary">Volver a Productos</Link>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<Form method="POST" ref={formRef}>
						<div className="mb-3">
							<label className="form-label" htmlFor="patenteVehiculo">Patente </label>
							<input type="text" className="form-control" id="patenteVehiculo" name="patenteVehiculo" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="rutCliente">Rut cliente</label>
							<input type="text" className="form-control" id="rutCliente" name="rutCliente"  />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="nombreCliente">Nombre cliente </label>
							<input type="text" className="form-control" id="nombreCliente" name="nombreCliente"/>
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