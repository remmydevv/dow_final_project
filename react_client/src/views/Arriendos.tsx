import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import {borrarAriendo, devolverArriendo, getArriendos, getArriendosActivos, getArriendosTerminados } from "../services/ArriendoService";
import type { Arriendo } from "../types/Arriendo";
import ArriendoRow from "../components/ArriendoRow";

export async function loader({request}: LoaderFunctionArgs){
	const url = new URL(request.url)
	const estado = url.searchParams.get("estado")
	if(estado === "activos"){
		return await getArriendosActivos()
	}
	if(estado ==="terminados"){
		return await getArriendosTerminados()
	}
	return await 	getArriendos()
}

export default function Arriendos (){
	const arriendos = useLoaderData() as Arriendo[]
	//const [arriendos, setArriendos] = useState(arriendosIniciales) // guardamos en memoria

	const handlerDelete = async (arriendoId: number) =>{
		await borrarAriendo(arriendoId)
		window.location.reload()
		//setArriendos(arriendos.filter(arriendo => arriendo.id !== arriendoId)) //creamos una nueva lista
	}

	const handlerDevolver = async (arriendoId: number)=>{
		await devolverArriendo(arriendoId)
		window.location.reload()
	}
    return (
        <>
        <div className="container-fluid">
			<h2>Administrar arriendos</h2>
			<div className="row">
				<div className="col-2 ">
                <Link to="/arriendos?estado=activos" className="btn btn-sm btn-success me-1">
                    <i className="bi bi-calendar2-check-fill"> Activos</i>
                </Link>
                <Link to="/arriendos?estado=terminados" className="btn btn-sm btn-danger">
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