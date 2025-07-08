import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar(){
	const navegador = useNavigate()
	const handleLogout = ()=>{
		localStorage.removeItem('token')
		navegador('/login')
	}

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><img src="/img/carlogo.png" alt="logo" style={{height: "80px"}}></img></a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item active">
							<NavLink to="/" className="nav-link">Resumen</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/arriendos" className="nav-link">Arriendos</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/usuario" className="nav-link">Usuarios</NavLink>
						</li>
					</ul>
					<div className="d-flex ms-auto ">
						<button className="btn btn-sm btn-outline-dark" onClick={handleLogout}>Log Out</button>
					</div>
				</div>
			</div>
		</nav>
    )
}