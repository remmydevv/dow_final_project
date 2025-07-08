import { Form, redirect, useActionData, type ActionFunctionArgs } from "react-router-dom";
import { login } from "../services/UsuarioService";

export async function action({request}: ActionFunctionArgs){
    const dataForm = Object.fromEntries(await request.formData())
    const result = await login(dataForm)
    if(!result.success){
        return result
    }
    return redirect('/')
}

export default function LogIn() {
    const actionData = useActionData() as {
        success?: boolean,
        error?: string,
        errores?:{[key:string]: string[]} 
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div className="card p-4 bg-black border-secondary" >
                <h2 className="text-center mb-4">Iniciar sesión</h2>
                {actionData?.error && (
                    <div className="alert alert-danger">
                        {actionData.error}
                    </div>
                )}

                <Form method="POST">
                    <div className="mb-3">                                          
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${actionData?.errores?.email ? 'is-invalid': ""}`}
                            id="email"
                            placeholder="Enter your email"
                        />
                        {'email' in (actionData?.errores || {}) && (
                            <div className="invalid-feedback">
                                {actionData.errores?.email[0]}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={`form-control ${actionData?.errores?.password ? 'is-invalid': ""}`}
                            id="password"
                            placeholder="Enter your password"
                        />
                        {'password' in (actionData?.errores || {}) && (
                            <div className="invalid-feedback">
                                {actionData.errores?.password[0]}
                            </div>
                        )}
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Iniciar Sesión
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
