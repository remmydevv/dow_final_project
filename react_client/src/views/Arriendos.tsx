import { Link, useLoaderData} from "react-router-dom";
import {borrarAriendo, devolverArriendo, getArriendos } from "../services/ArriendoService";
import type { Arriendo } from "../types/Arriendo";
import ArriendoRow from "../components/ArriendoRow";
import { useState } from "react";

export async function loader (){
	const arriendos = await getArriendos()
	return arriendos
}

export default function Arriendos (){
	const arriendosIniciales = useLoaderData() as Arriendo[]
	const [arriendos, setArriendos] = useState(arriendosIniciales)

	const handlerDelete = async (arriendoId: number) =>{
		await borrarAriendo(arriendoId) //borramos en la db
		//window.location.reload()
		setArriendos(arriendos.filter(arriendo => arriendo.id !== arriendoId))
	}

	const handlerDevolver = async (arriendoId: number)=>{
		await devolverArriendo(arriendoId)
		setArriendos(arriendos.map(a => a.id === arriendoId ? { ...a, fechaFin: new Date().toISOString() } : a))

	}
    return (
        <>
        <div className="container-fluid">
			<h1>Admin Panel</h1>
			<div className="row">
				<div className="col-12 ">
                <Link to="/arriendos/activos" className="btn btn-sm btn-success me-1">
                    <i className="bi bi-calendar2-check-fill"> Activos</i>
                </Link>
                <Link to="/arriendos/terminados" className="btn btn-sm btn-danger">
                    <i className="bi bi-calendar-x-fill">Terminados</i>
                </Link>
				<Link to="/arriendos" className="btn btn-sm btn-info">
					<i className="bi bi-calendar-x-fill">Todos</i>
				</Link>
				</div>
			</div>
					<div className="col mb-3 text-end">
					<Link to="/arriendos/crear"className="btn btn-primary">Nuevo arriendo</Link>
				</div>
			<div className="table-responsive">
				<table className="table table-striped table-hover">
					<thead className="table-danger">
						<tr>
							<th >N°</th>
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
							<ArriendoRow key={arriendo.id} 
							index={index} 
							arriendo={arriendo} 
							borrar={handlerDelete}
							devolver={handlerDevolver}
							></ArriendoRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
        </>
        
    )
}