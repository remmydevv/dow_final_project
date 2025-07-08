import { Form, Link, redirect, type ActionFunctionArgs } from "react-router-dom";
import { useRef } from "react";
import { usuarioCrear } from "../services/UsuarioService";

export async function action({ request }: ActionFunctionArgs) {
	const formData = Object.fromEntries(await request.formData());
	const resultado = await usuarioCrear(formData);

	if (!resultado?.success) {
		return resultado;
	}
	return redirect("/login");
}

export default function CrearArriendo() {
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleReset = () => {
		formRef.current?.reset();
	};

	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
			style={{backgroundImage: "url(/img/bg-red.jpg)", backgroundSize: "cover", backgroundPosition: "center"  }}>
			<div className="col-md-6">

				{/* Botón Volver */}
				<div className="mb-3 text-start">
					<Link to="/usuario" className="btn btn-outline-danger">
						← Volver a Usuarios
					</Link>
				</div>

				{/* Tarjeta de formulario */}
				<div className="card shadow-lg border-0">
					<div className="card-header bg-success text-white">
						<h4 className="mb-0">Registrar nuevo usuario</h4>
					</div>
					<div className="card-body p-4">
						<Form method="POST" ref={formRef}>
							<div className="mb-3">
								<label className="form-label" htmlFor="gmail">Ingrese Gmail</label>
								<input type="text" className="form-control" id="gmail" name="email" />
							</div>

							<div className="mb-3">
								<label className="form-label" htmlFor="password">Crear Contraseña</label>
								<input type="text" className="form-control" id="password" name="password" />
							</div>

							<div className="mb-3 text-end">
								<button type="reset" className="btn btn-warning me-2" onClick={handleReset}>Restablecer</button>
								<button type="submit" className="btn btn-success">Agregar Usuario</button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
