import type { ArriendoTipoVehiculo } from "../types/Arriendo"

type arriendoTipoRowProps = {
    arriendoTipo: ArriendoTipoVehiculo
}


export default function ArriendoTipoRow({arriendoTipo}: arriendoTipoRowProps){
    //aqui cambiamos el color del borde para mas estetica.
    const borderColor = arriendoTipo.tipo_vehiculo === 'SUV'
    ? 'success'
    : arriendoTipo.tipo_vehiculo === 'Camioneta'
    ? 'danger'
    : 'info';
    return (

        <div className="col-md-4 mb-3">
          <div className="card text-bg-light h-100">
            <div className={`card-body card rounded-3 bg-${borderColor}`}>
              <h5 className="card-title fw-bold">{arriendoTipo.tipo_vehiculo}</h5>
              <p className="display-6 ">Total: {arriendoTipo.cantidad}</p>
            </div>
          </div>
        </div>
    )
}






