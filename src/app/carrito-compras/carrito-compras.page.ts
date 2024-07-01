import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';
import { CarritoTemporalService } from '../servicios/CarritoTemporal.service';
import { CarritodeCompras } from '../interface/CarritodeCompras';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class CarritoComprasPage implements OnInit {

  private carritoComprasTemporalService: CarritoTemporalService= inject(CarritoTemporalService)
  
  public carrito: CarritodeCompras|undefined; 
  constructor() {
    this.carrito = this.carritoComprasTemporalService.carrito;
   }

  ngOnInit() {
  }

}
