import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home, {loader as loaderTipoVehiculo} from "./views/Home"
import Arriendos, {louder as loaderAriendos} from "./views/Arriendos"
import CrearArriendo from "./views/CrearArriendo"


export const router = createBrowserRouter([
    //aqui colocaremos las rutas para movernos en nuestra app react
    {
        path: '/',              // la url usara como base este layout (NavBar y Outlet)
        element: <Layout/>,
        children:[
            {
                index:true, //esta seria nuestra portada
                element: <Home></Home>,
                loader: loaderTipoVehiculo,
            },
            {
                path: 'arriendos',                  //esto es muy distinto a los endPoints de nuestro Api router
                element: <Arriendos></Arriendos>,
                loader: loaderAriendos ,

            },
            {
                path: 'arriendos/crear',                  //esto es muy distinto a los endPoints de nuestro Api router
                element: <CrearArriendo></CrearArriendo>
            },
        ]
    }
])