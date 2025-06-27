import type { ArriendoTipoVehiculo } from "../types/Arriendo"

type arriendoTipoRowProps = {
    arriendoTipo: ArriendoTipoVehiculo
}


export default function ArriendoTipoRow({arriendoTipo}: arriendoTipoRowProps){
    {console.log(arriendoTipo.tipo_vehiculo)}
    //aqui cambiamos el color del borde para mas estetica.
    const borderColor = arriendoTipo.tipo_vehiculo === 'SUV'
    ? 'warning'
    : arriendoTipo.tipo_vehiculo === 'Camioneta'
    ? 'danger'
    : 'info';
    return (
        <div className="col-md-12 mb-5">
          <div className={`card border-${borderColor} border-2 h-100`}>
            <div className="card-body">
              <p className="card">{arriendoTipo.tipo_vehiculo}</p>
              <p className="fs-4">{arriendoTipo.cantidad} arriendos</p>
            </div>
          </div>
        </div>
    )
}