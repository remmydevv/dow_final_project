import type { Arriendo } from "../types/Arriendo"

type arriendoRowProps = {
    index:number,
    arriendo: Arriendo
}



export default function ArriendoRow({index, arriendo}: arriendoRowProps) {
  return (
            <tr>
            <td className="text-center">{index + 1}</td>
            <td>{arriendo.rutCliente}</td>
            <td>12/06/2025</td>
            <td className="text-end">16/06/2025</td>
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
