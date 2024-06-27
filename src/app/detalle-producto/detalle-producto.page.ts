import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { cartOutline } from 'ionicons/icons'
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { CarritoComprasService } from '../servicios/carritoCompras.service';
import { Producto } from '../interface/Producto';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class DetalleProductoPage implements OnInit {

  private carritoComprasServicee: CarritoComprasService = inject(CarritoComprasService)

  producto: Producto| undefined;

  constructor() {
    // add icons aqui para que fucionesn y con imports arriba
    addIcons({ arrowBackCircleOutline });
    addIcons({ cartOutline });

    // para el servicio 
    this.consultaProducto()
  }
  consultaProducto() { 
    this.carritoComprasServicee.getProducto(1).subscribe(data =>
      this.producto = data.data
    )
  }

  ngOnInit() {
  }

}

