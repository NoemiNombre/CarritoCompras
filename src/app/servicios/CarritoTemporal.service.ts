import { Injectable } from '@angular/core';
import { CarritoItem, CarritodeCompras } from '../interface/CarritodeCompras';

@Injectable({
  providedIn: 'root'
})
export class CarritoTemporalService {

  carrito: CarritodeCompras = {
    id_cliente: null,
    subtotal: 0,
    iva: 0,
    total: 0,

    items: []
  }

  constructor() {
  }

  agregarProducto(item: CarritoItem) {
    let itemSelect = this.carrito.items.find(element => element.id_producto = item.id_producto);
    if (!itemSelect) {
      this.carrito.items.push(item)
    } else {
      itemSelect.cantidad = item.cantidad;
      itemSelect.subtotal = item.subtotal;
      itemSelect.iva = item.iva;
      itemSelect.total = item.total;
    }
    this.calcular();

  }
  getItemProducto(id_producto: number) {
    const item = this.carrito.items.find(item => item.id_producto == id_producto);
    return item
  }

  calcular(){
    this.carrito.iva = 0;
    this.carrito.subtotal=0;
    this.carrito.total =0;
    this.carrito.items.forEach(items =>{
      this.carrito.subtotal+= items.subtotal;
      this.carrito.iva+= items.iva;
      this.carrito.total+= items.total;
    } );

    this.carrito.subtotal.toFixed(2);
    this.carrito.iva.toFixed(2);
    this.carrito.total.toFixed(2);
  }

}
