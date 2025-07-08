import { Link, useLoaderData } from "react-router-dom"
import { getArriendosTerminados } from "../services/ArriendoService"
import type {ArriendoTerminado } from "../types/Arriendo"
import ArriendoTerminadoRow from "../components/ArriendoTerminadoRow"

export async function loader(){
    return getArriendosTerminados()
}

export default function ArriendosTerminados(){
    const arriendos = useLoaderData() as ArriendoTerminado[]
    return (
        <>
        <h1>ARRIENDOS TERMINADOS</h1>
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
                            <th>Fecha Termino</th>
							<th>Patente</th>
							<th>Tipo vehiculo</th>
							<th>Nombre Cliente</th>
						</tr>
					</thead>
					<tbody>
						{arriendos.map((arriendo, index)=>(
							<ArriendoTerminadoRow key={arriendo.id} 
							index={index} 
							arriendo={arriendo} 
							></ArriendoTerminadoRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
        </>
    )
    
}