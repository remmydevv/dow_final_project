import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute(){
    const navegacion = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(()=>{
        if(!token){
            navegacion('/login')
        }
    },[token, navegacion])
    return token? <Outlet></Outlet> : null
}