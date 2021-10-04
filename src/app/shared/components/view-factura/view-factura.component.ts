import { iFactura } from './../../../data/interfaces/Facturas';
import { FacturasService } from './../../../data/services/facturas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-factura',
  templateUrl: './view-factura.component.html',
  styleUrls: ['./view-factura.component.scss']
})
export class ViewFacturaComponent implements OnInit {

  oFactura!: iFactura;
  idFactura: any;

  constructor(private facturasService: FacturasService,
              private activatedRoute: ActivatedRoute) {        
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idFactura = paramMap.get('id')
      this.GetAllFacturas(this.idFactura)
    },error => {
      console.log(error);
    })
  
  }

  GetAllFacturas(id: number) {
    this.facturasService.GetForId(this.idFactura).subscribe(resp => {
      this.oFactura = resp
      console.log(this.oFactura)
    },
    error => {
      console.log(error);
    })
  }

}
