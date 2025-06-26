import { Link, useLoaderData } from "react-router-dom";
import { getArriendos } from "../services/ArriendoService";
import type { Arriendo } from "../types/Arriendo";
import ArriendoRow from "../components/ArriendoRow";

export async function louder(){
	//llamamos a la funcion que lista la lista (xd) de arriendos
	const arriendos = await getArriendos()
	return arriendos

}

export default function Arriendos (){
	const arriendos = useLoaderData() as Arriendo[]
	console.log(arriendos)
    return (
        <>
        <div className="container-fluid">
			<h2>Administrar arriendos</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="#">Inicio</a></li>
							<li className="breadcrumb-item active" aria-current="page">Productos</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<Link to="/arriendos/crear"className="btn btn-primary">Nuevo arriendo</Link>
				</div>
			</div>
			<div className="table-responsive">
				<table className="table table-bordered table-striped table-hover">
					<thead className="table-dark">
						<tr>
							<th>N°</th>
							<th>Rut</th>
							<th>Fecha Inicio</th>
							<th>Fecha Final</th>
							<th>Patente</th>
							<th>Tipo vehiculo</th>
							<th>Nombre Cliente</th>
							<th>Editar</th>
						</tr>
					</thead>
					<tbody>
						{arriendos.map((arriendo, index)=>(
							<ArriendoRow key={arriendo.id} index={index} arriendo={arriendo}></ArriendoRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
        </>
        
    )
}