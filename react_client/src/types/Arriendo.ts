import {  object, number, string, type InferOutput, array } from 'valibot';

// Esquema de arriendo con validación de fechas en formato Date
export const ArriendoSchema = object({
  id: number(),
  //fechaInicio: 
  //fechaFin: 
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
});

export const ArriendosSchema = array(ArriendoSchema)

// Tipo inferido de salida
export type Arriendo = InferOutput<typeof ArriendoSchema>;
