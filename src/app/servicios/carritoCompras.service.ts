import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Respuesta } from '../interface/Respuesta';
import { Producto } from '../interface/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  baseurl = "https://epico.gob.ec/vehiculo/"
   private httpClient:HttpClient = inject(HttpClient);

   todosProductos(){
    return this.httpClient.get<RespuestaProductos>(this.baseurl='productp/all/')
   }
   getProducto(id:number){
    return this.httpClient.get<RespuestaProducto>(this.baseurl='productp/all/+')

   }


}

export interface RespuestaProductos extends Respuesta{
  data: Producto[];
}
export interface RespuestaProducto extends Respuesta{
  data: Producto
}
