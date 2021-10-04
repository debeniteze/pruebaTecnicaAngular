import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { iFactura } from '../interfaces/Facturas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private httpClient: HttpClient) { }

  GetForId(id: number) {
    return this.httpClient.get<iFactura>(environment.urlAPiFacturas + '/' +id)
  }

  SaveFactura(factura: iFactura){
    console.log(JSON.stringify(factura))
    return this.httpClient.post(environment.urlAPiFacturas, JSON.stringify(factura),
    {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
  }

  DeleteFactura(id: bigint){
    return this.httpClient.delete(environment.urlAPiFacturas+ '/' +id)
  }  
}
