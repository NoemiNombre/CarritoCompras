import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScrollBaseCustomEvent } from '@ionic/angular';
//  imports de iconos 
import { addIcons } from 'ionicons';
// los nombres de cada icono  
import { arrowBackCircleOutline } from 'ionicons/icons';
import { cartOutline } from 'ionicons/icons';
import { addCircleOutline } from 'ionicons/icons';
import { removeCircleOutline } from 'ionicons/icons';

// mas importaciones
import { ActivatedRoute, RouterLink, Scroll } from '@angular/router';
// import sevicio 
import { CarritoComprasService } from '../servicios/carritoCompras.service';
// import interface 
import { Producto } from '../interface/Producto';
import { CarritoTemporalService } from '../servicios/CarritoTemporal.service';
import { CarritoItem } from '../interface/CarritodeCompras';




@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class DetalleProductoPage implements OnInit {

  private carritoComprasServicee: CarritoComprasService = inject(CarritoComprasService)
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private carritoComprasTemporalService: CarritoTemporalService= inject(CarritoTemporalService)

  
  producto: Producto | undefined;
  cantidad: number = 1;

  constructor() {
    // para el servicio 
    // this.consultaProducto()
    this.activeRoute.params.subscribe(params => {
      this.carritoComprasServicee.getProducto(params['id_producto']).subscribe(data => {
        this.producto = data.data;
        this.verificraItemCarrito();
      })
    })

    // add icons aqui para que fucionesn y con imports arriba
    addIcons({ arrowBackCircleOutline });
    addIcons({ cartOutline });
    addIcons({ addCircleOutline });
    addIcons({ removeCircleOutline })

    
  };

  // consultaProducto() { 
  //   this.carritoComprasServicee.getProducto(1).subscribe(data =>
  //     this.producto = data.data
  //   )
  // };
  sumar() {
    this.cantidad++
  };
  restar() {
    if ((this.cantidad - 1) == 0) {
      return;
    }
    this.cantidad--
  }

  verificraItemCarrito(){
    if(!this.producto){
      return
    }

    const item = this.carritoComprasTemporalService.getItemProducto(this.producto?.id);
    if(!item){
      this.cantidad = 0
    }else{
      this.cantidad = item?.cantidad; 
    }
   
  }

  agregarCarrito(){
    if (!this.producto){
      return;
    }
    let item:CarritoItem = {
      cantidad: this.cantidad,
      id_producto: this.producto?.id,
      iva: 0,
      subtotal:(this.cantidad * this.producto.price),
      total:0, 
    }

    item.iva = item.subtotal * 0.15;
    item.total = item.subtotal + item.iva;


    this.carritoComprasTemporalService.agregarProducto(item);


  }

  ngOnInit() {
  }

}

