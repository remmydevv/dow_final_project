import  Express  from "express";
import router from './router'
import db from "./config/database";
import cors, {CorsOptions} from 'cors'
const server = Express()


//dataBase connecting
async function conectarDb(){
    try {
        await db.authenticate() // se conecta a la db
        db.sync()               // sincroniza modelos
        console.log('conexión a base de datos EXITOSA')
    } catch (error) {
        console.log('No se pudo conectar a la Data Base')
        console.log(error)
    }        
    
    
}

conectarDb()

const corsOptions: CorsOptions = {
    origin: function(origin, callback){
        //ese !origin es para poder trabajar con postman
        if (!origin || origin === process.env.FRONTEND_URL ){
            callback(null, true) // null error | true permitimos la conexion
        } else{
            callback(new Error('Hubo error de CORS'), false)
        }
    }
}

server.use(cors(corsOptions)) // siempre usamos use para todos los mensajes http que llegan al api


//esto nos permite la lectura de json enviado desde el client
server.use(Express.json())

// /api se transpasan al archivo router
server.use('/api', router)

export default server
 