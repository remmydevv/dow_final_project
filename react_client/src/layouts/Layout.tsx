import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout(){
    return (
        <>
        {/* NAVBAR */}
        <NavBar></NavBar>
        {/* MAIN CONTENT */}
        <main className="container-fluid"></main>
            <Outlet/>
        </>
    )
}