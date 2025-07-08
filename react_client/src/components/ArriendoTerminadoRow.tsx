import type { ArriendoTerminado } from "../types/Arriendo"

type arriendoRowProps = {
    index:number,
    arriendo: ArriendoTerminado
}


export default function ArriendoRow({index, arriendo}: arriendoRowProps) {

    const fechaLimpia = new Date(arriendo.fechaInicio).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    })
    const fechaFinLimpia = new Date(arriendo.fechaFin).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    })

  return (
            <tr>
            <td>{index + 1}</td>
            <td>{arriendo.rutCliente}</td>
            <td>{fechaLimpia}</td>
            <td>{fechaFinLimpia}</td>
            <td >{arriendo.patenteVehiculo}</td>
            <td>{arriendo.tipoVehiculo}</td>
            <td>{arriendo.nombreCliente}</td>
        </tr>

  )
}