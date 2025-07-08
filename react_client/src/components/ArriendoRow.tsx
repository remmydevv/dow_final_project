import type { Arriendo } from "../types/Arriendo"

type arriendoRowProps = {
    index:number,
    arriendo: Arriendo
    borrar: (arriendoId: number) => void
    devolver: (arriendoId: number) => void
}


export default function ArriendoRow({index, arriendo, borrar, devolver}: arriendoRowProps) {

    const fechaLimpia = new Date(arriendo.fechaInicio).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    })

    const mostrarFechaFin = arriendo.fechaFin
  ? new Date(arriendo.fechaFin).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
  : 'activo';
  return (
            <tr>
            <td className="text-center">{index + 1}</td>
            <td>{arriendo.rutCliente}</td>
            <td>{fechaLimpia}</td>
            <td >{mostrarFechaFin}</td>
            <td >{arriendo.patenteVehiculo}</td>
            <td>{arriendo.tipoVehiculo}</td>
            <td>{arriendo.nombreCliente}</td>
            <td className="text-start">
                <button className="btn btn-sm btn-warning me-1" onClick={()=> devolver(arriendo.id)}>
                    <i className="bi bi-pencil-square"> Devolver</i>
                </button>
                <button className="btn btn-sm btn-danger" onClick={()=>borrar(arriendo.id)}>
                    <i className="bi bi-trash3">Borrar</i>
                </button>
            </td>
        </tr>

  )
}




