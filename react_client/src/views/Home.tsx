import { useLoaderData } from "react-router-dom"
import { getArriendosTipoVehiculo } from "../services/ArriendoTipo"
import type { ArriendoTipoVehiculo } from "../types/Arriendo"
import ArriendoTipoRow from "../components/ArriendoTipoRow"

export async function loader(){
	const arriendosTipo = await getArriendosTipoVehiculo()
	return arriendosTipo
}


export default function Home (){
  	const arriendosTipo = useLoaderData() as ArriendoTipoVehiculo[]
    return (
      <>
      

      {/* cards de vehiculos */}
      <h4 className="mb-4 mt-4">Arriendos por tipo de vehículo</h4>
      <div className="row">
        {arriendosTipo.map((arriendoTipo, index)=>(
          <ArriendoTipoRow key={index} arriendoTipo={arriendoTipo} ></ArriendoTipoRow>
        ))}
      </div> 

    </>
    )
}