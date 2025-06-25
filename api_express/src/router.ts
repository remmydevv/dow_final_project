import {Router} from 'express'
import {getArriendos,  crearArriendo, borrarArriendo, getArriendosActivos, getArriendosTerminados, getArriendosTipoVehiculo, devolverArriendo} from './handlers/arriendos'
import { getAuxi } from './handlers/auxi'
const router = Router()


//aqui tenemos cada endpoint con su dichoso handler
//endPoint provisorio

//nota muy importante express matchea de arriba hacia abajo
//endPoints con variables al final y las rutas literales primero
router.get('/arriendos', getArriendos)

router.get('/arriendos/activos', getArriendosActivos)
router.get('/arriendos/terminados', getArriendosTerminados)

router.get('/arriendos/cantidad-tipo-vehiculo', getArriendosTipoVehiculo)

router.post('/arriendos', crearArriendo)

router.patch('/arriendos/:id', devolverArriendo)  //el put cambia el objeto completo en cambio el patch cambia un atributo del object
router.delete('/arriendos/:id', borrarArriendo)

//endPoint de provisorio dos
router.get('/auxi', getAuxi)


export default router