import server from "./server";

//nuesta api esta andando y escucha las peticiones del port 3000
server.listen(3000, ()=>{
    console.log('inicio del api')
})