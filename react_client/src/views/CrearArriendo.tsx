import { Form, Link, redirect, useActionData, type ActionFunctionArgs } from "react-router-dom";
import { arriendoCrear } from "../services/ArriendoService";
import { useRef } from "react";

export async function action({ request }: ActionFunctionArgs) {
	const formData = Object.fromEntries(await request.formData());
	const resultado = await arriendoCrear(formData);

	if (!resultado?.success) {
		return resultado;
	}
	return redirect('/arriendos');
}

export default function CrearArriendo() {
	const actionData = useActionData() as {
		success?: boolean;
		error?: string;
		errores: { [key: string]: string[] };
	};

	const formRef = useRef<HTMLFormElement | null>(null);

	const handleReset = () => {
		formRef.current?.reset();
	};

	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
			<div className="col-md-6">
				<div className="card shadow-lg border-0">
					<div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
						<h4 className="mb-0">Registrar nuevo arriendo</h4>
						<Link to="/arriendos" className="btn btn-sm btn-outline-light">
							Volver
						</Link>
					</div>
					<div className="card-body p-4">
						{actionData?.error && (
							<div className="alert alert-danger">{actionData?.error}</div>
						)}

						<Form method="POST" ref={formRef}>
							<div className="form-floating mb-3">
								<input
									type="text"
									className={`form-control ${actionData?.errores?.patenteVehiculo ? 'is-invalid' : ''}`}
									id="patenteVehiculo"
									name="patenteVehiculo"
								/>
								<label htmlFor="patenteVehiculo">Patente del vehículo</label>
								{actionData?.errores?.patenteVehiculo && (
									<div className="invalid-feedback">
										{actionData.errores.patenteVehiculo[0]}
									</div>
								)}
							</div>

							<div className="form-floating mb-3">
								<input
									type="text"
									className={`form-control ${actionData?.errores?.rutCliente ? 'is-invalid' : ''}`}
									id="rutCliente"
									name="rutCliente"
								/>
								<label htmlFor="rutCliente">RUT del cliente</label>
								{actionData?.errores?.rutCliente && (
									<div className="invalid-feedback">
										{actionData.errores.rutCliente[0]}
									</div>
								)}
							</div>

							<div className="form-floating mb-3">
								<input
									type="text"
									className={`form-control ${actionData?.errores?.nombreCliente ? 'is-invalid' : ''}`}
									id="nombreCliente"
									name="nombreCliente"
								/>
								<label htmlFor="nombreCliente">Nombre del cliente</label>
								{actionData?.errores?.nombreCliente && (
									<div className="invalid-feedback">
										{actionData.errores.nombreCliente[0]}
									</div>
								)}
							</div>

							<div className="form-floating mb-4">
								<select className="form-select" id="tipoVehiculo" name="tipoVehiculo">
									<option value="">Seleccione una Categoría</option>
									<option value="SUV">SUV</option>
									<option value="Sedan">Sedan</option>
									<option value="Camioneta">Camioneta</option>
								</select>
								<label htmlFor="tipoVehiculo">Tipo de Vehículo</label>
							</div>

							<div className="d-flex justify-content-between">
								<button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>
									Limpiar
								</button>
								<button type="submit" className="btn btn-success">
									Agregar Arriendo
								</button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
}
