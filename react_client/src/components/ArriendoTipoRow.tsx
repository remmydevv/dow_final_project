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
    : 'info'
	
	const imgByTipo = (tipo: string) =>{
		if (tipo === "SUV"){
			return '/img/suv.webp'
		} else if (tipo ==='Camioneta'){
			return '/img/cam.png'
		} else {
			return '/img/sed.avif'
		}
	}

    return (

        <div className="col-md-4 mb-3">
          <div className="card text-bg-light h-100">
            <div className={`card-body card rounded-3 bg-${borderColor}`}>
              <h5 className="card-title text-center fw-bold">{arriendoTipo.tipo_vehiculo}</h5>
			  <img src={imgByTipo(arriendoTipo.tipo_vehiculo)} alt={arriendoTipo.tipo_vehiculo} 
			  className="card-img-top img-fluid mb-2" style={{maxHeight: '150px', objectFit: 'contain'}}/>
              <p className="display-6 text-center ">Total: {arriendoTipo.cantidad}</p>
            </div>
          </div>
        </div>
    )
}