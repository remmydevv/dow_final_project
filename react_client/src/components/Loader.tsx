import loaderGif from '../assets/loader.gif'
import './css/Loader.component.css'


export default function Loader(){
    return (
        <div className="container">
            <img src={loaderGif} alt="Cargando pagina..." className="spinner" />
            <p className="small">Cargando pagina web</p>
        </div>
    )
}