import {Link, useLoaderData } from "react-router-dom"
import { getArriendosActivos } from "../services/ArriendoService"
import type {ArriendoActivo } from "../types/Arriendo"
import ArriendoActivoRow from "../components/ArriendoActivoRow"

export async function loader(){
    const arriendosActivos = await getArriendosActivos()
    return arriendosActivos
}

export default function arriendosActivos(){
    const arriendos = useLoaderData() as ArriendoActivo[]
    return (
        <>
        <h1>ARRIENDOS ACTIVOS</h1>
        <div className="col-12 mb-2 text-end">
            <Link to="/arriendos"className="btn btn-sm btn-info text-end">Todos</Link>
        </div>
        <div className="container-fluid">
			<div className="table-responsive">
				<table className="table table-hover my-0">
					<thead className="table-success">
						<tr>
							<th >N°</th>
							<th>Rut</th>
							<th>Fecha Inicio</th>
							<th>Patente</th>
							<th>Tipo vehiculo</th>
							<th>Nombre Cliente</th>
						</tr>
					</thead>
					<tbody>
						{arriendos.map((arriendo, index)=>(
							<ArriendoActivoRow key={arriendo.id} 
							index={index} 
							arriendo={arriendo} 
							></ArriendoActivoRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
        </>
    )
}