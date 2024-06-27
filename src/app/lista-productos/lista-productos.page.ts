import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { CarritoComprasService } from '../servicios/carritoCompras.service';
import { Producto } from '../interface/Producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ListaProductosPage implements OnInit {

  private carritoComprasService: CarritoComprasService = inject(CarritoComprasService);
  
  listaProductos:Producto[]=[];

  ngOnInit(): void {
      this.consultarProductos();
  }

  consultarProductos(){
    this.carritoComprasService.todosProductos().subscribe(data =>{
      this.listaProductos = data.data;
    })
  }

}
