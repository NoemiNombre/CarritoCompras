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

  }
  getItemProducto(id_producto: number) {
    const item = this.carrito.items.find(item => item.id_producto == id_producto);
    return item
  }

}
