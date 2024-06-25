import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink, CommonModule, FormsModule]
})
export class DetalleProductoPage implements OnInit {

  private carritoComprasService: CarritoComprasService = inject(CarritoComprasService);
  

  constructor() { }

  ngOnInit() {
  }

}
