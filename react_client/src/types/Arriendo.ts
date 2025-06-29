import {  object, number, string, type InferOutput, array, nullable, custom } from 'valibot';

// Esquema de arriendo con validación de fechas en formato Date
export const ArriendoSchema = object({
  id: number(),
  fechaInicio:string(),         
  fechaFin: nullable(string()), 
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
})
export const ArriendoActivoSchema = object({
  id: number(),
  fechaInicio:string(),         
  fechaFin: custom((v)=> v === null),  //debe ser NULL
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
})

export const ArriendoTerminadoSchema = object({
  id: number(),
  fechaInicio:string(),         
  fechaFin: string(),  //string() ya se asegura que no puede ser NULL
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
})

export const ArriendoTipoVehiculoSchema = object ({
  tipo_vehiculo: string(),
  cantidad: number()
})

export const ArriendoFormSchema = object ({
  patenteVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
  tipoVehiculo: string(),

})


export const ArriendosTipoVehiculo = array(ArriendoTipoVehiculoSchema)
export const ArriendosSchema = array(ArriendoSchema)
export const ArriendosActivosSchema = array(ArriendoActivoSchema)
export const ArriendosTerminadosSchema = array(ArriendoTerminadoSchema)


// Tipo inferido de salida
export type Arriendo = InferOutput<typeof ArriendoSchema>;
export type ArriendoActivo = InferOutput<typeof ArriendoActivoSchema>;
export type ArriendoTerminado = InferOutput<typeof ArriendoTerminadoSchema>;
export type ArriendoTipoVehiculo = InferOutput<typeof ArriendoTipoVehiculoSchema >
