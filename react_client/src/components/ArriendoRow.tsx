import type { Arriendo } from "../types/Arriendo"

type arriendoRowProps = {
    index:number,
    arriendo: Arriendo
}


export default function ArriendoRow({index, arriendo}: arriendoRowProps) {

    const fechaLimpia = new Date(arriendo.fechaInicio).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    })

    const mostrarFechaFin = arriendo.fechaFin
  ? new Date(arriendo.fechaFin).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
  : 'Arriendo Activo!';
  return (
            <tr>
            <td className="text-center">{index + 1}</td>
            <td>{arriendo.rutCliente}</td>
            <td>{fechaLimpia}</td>
            <td className="text-end">{mostrarFechaFin}</td>
            <td className="text-end">{arriendo.patenteVehiculo}</td>
            <td>{arriendo.tipoVehiculo}</td>
            <td>{arriendo.nombreCliente}</td>
            <td className="text-center">
                <button className="btn btn-sm btn-warning me-1">
                    <i className="bi bi-pencil-square"> Devolver</i>
                </button>
                <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash3">Borrar</i>
                </button>
            </td>
        </tr>

  )
}
