import { Link } from "react-router-dom";

export default function Usuarios (){
    const currentGmail = localStorage.getItem("gmail")
    return (
        <>
        <h1>Menu de usuarios</h1>
        <div className="row mt-5">
        <div className="card col-6 me-5" style={{width: 200}} >
            <img src="/img/user.png" alt="testing" />
            <div className="card-body">
                <h5 className="card-title text-center">Tu</h5>
                <div className="col mb-3 mt-2 text-center">
					<Link to={`/usuario/contra/${currentGmail}`}className="btn btn-primary">Cambiar contraseña</Link>
				</div>
            </div>
        </div>
        <div className="card col-6" style={{width: 200}} >
            <img src="/img/user.png" alt="testing" />
            <div className="card-body">
                <h5 className="card-title text-center">Nuevo Usuario</h5>
                <div className="col mb-3 mt-2 text-center">
					<Link to="/usuario/crear"className="btn btn-primary">Crear nuevo Usuario</Link>
				</div>
            </div>
        </div>
        </div>
        </>
    )
}