import {  object, number, string, type InferOutput, array, nullable } from 'valibot';

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

export const ArriendoTipoVehiculoSchema = object ({
  tipo_vehiculo: string(),
  cantidad: number()
})





export const ArriendosTipoVehiculo = array(ArriendoTipoVehiculoSchema)
export const ArriendosSchema = array(ArriendoSchema)

// Tipo inferido de salida
export type Arriendo = InferOutput<typeof ArriendoSchema>;
export type ArriendoTipoVehiculo = InferOutput<typeof ArriendoTipoVehiculoSchema >
