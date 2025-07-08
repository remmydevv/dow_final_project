import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home, {loader as loaderTipoVehiculo} from "./views/Home"
import Arriendos, {loader as loaderAriendos} from "./views/Arriendos"
import CrearArriendo, {action as actionCrearAriendo} from "./views/CrearArriendo"
import Loader from "./components/Loader"
import LogIn, {action as actionLogin} from "./views/LogIn"
import PrivateRoute from "./components/PrivateRoute"
import ArriendosActivos, {loader as loaderActivos} from "./views/ArriendosActivos"
import ArriendosTerminados, {loader as loaderTerminados} from "./views/ArriendosTerminados"
import Usuarios from "./views/Usuarios"
import UsuarioContra, {action as actionContra} from "./views/UsuarioContra"
import CrearUsuario, {action as actionCrearUser} from "./views/CrearUsuario"


export const router = createBrowserRouter([
    //aqui colocaremos las rutas para movernos en nuestra app react
    {
        path:'/login',
        element: <LogIn></LogIn>,
        action: actionLogin,
    },
    {
        path: '/',              // la url usara como base este layout (NavBar y Outlet)
        element: <Layout/>,
        HydrateFallback:Loader,
        children:[
            {
                element: <PrivateRoute></PrivateRoute>,
                children:[
            {
                index:true, //esta seria nuestra portada
                element: <Home></Home>,
                loader: loaderTipoVehiculo,
            },
            
            {
                path: 'arriendos',//esto es muy distinto a los endPoints de nuestro Api router
                element: <Arriendos></Arriendos>,
                loader: loaderAriendos ,

            },
            
            {
                path: 'arriendos/crear',//esto es muy distinto a los endPoints de nuestro Api router
                element: <CrearArriendo></CrearArriendo>,
                action: actionCrearAriendo
            },
            {
                path:'arriendos/activos',
                element: <ArriendosActivos></ArriendosActivos>,
                loader: loaderActivos,
            },
            {
                path:'arriendos/terminados',
                element: <ArriendosTerminados></ArriendosTerminados>,
                loader: loaderTerminados,
            },
            {
                path:'/usuario',
                element: <Usuarios></Usuarios>,
            },
            {
                path: '/usuario/contra/:gmail',
                element: <UsuarioContra></UsuarioContra>,
                action: actionContra,
            },
            {
                path:'/usuario/crear',
                element: <CrearUsuario></CrearUsuario>,
                action: actionCrearUser,
            }
                ]
            }
        ]
    }
])