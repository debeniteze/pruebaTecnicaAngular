import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iFactura } from '../interfaces/Facturas';
import { environment } from 'src/environments/environment';
import { iProducto } from '../interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  GetAllProductos() {
    return this.httpClient.get<iProducto[]>(environment.urlAPiProductos)
  }
  
}
