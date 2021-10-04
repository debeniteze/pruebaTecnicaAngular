import { FacturasService } from './../../../data/services/facturas.service';
import { iFactura } from './../../../data/interfaces/Facturas';
import { ProductosService } from './../../../data/services/productos.service';
import { Component, OnInit } from '@angular/core';
import { iProducto } from 'src/app/data/interfaces/Productos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2'; 
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent implements OnInit {

  oProductos: iProducto[] = []
  formValuesFactura!:  FormGroup;
  
  constructor(private productosService: ProductosService,
              private facturasService: FacturasService) {
     
                this.GetAllProductos()
   
              }

  ngOnInit(): void {
    this.formValuesFactura = new FormGroup({
      numerofactura: new FormControl('', Validators.required),
      fecha: new FormControl(this.GetDateTime(), Validators.required),
      tipodepago: new FormControl('', Validators.required),
      documentocliente: new FormControl('', Validators.required),
      nombrecliente: new FormControl('', Validators.required),
      subtotal: new FormControl('', Validators.required),
      descuento: new FormControl('', Validators.required),
      iva: new FormControl('', Validators.required),
      totaldescuento: new FormControl('', Validators.required),
      totalimpuesto: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required),
      idproducto: new FormControl('', Validators.required)
    })
  }

  GetAllProductos() {
    this.productosService.GetAllProductos().subscribe(resp => {
      this.oProductos.push(...resp)
    },
    error => {
      console.log(error);
    })
  } 

  onSubmit(){
    if(this.formValuesFactura.valid){
      this.SaveFactura(this.formValuesFactura.value)
    }else{
      this.AlertError()
    }   
  }

  SaveFactura(factura: iFactura){
    this.facturasService.SaveFactura(factura).subscribe(resp => {
      if(resp > 0){
        Swal.fire(
          'Realizado!',
          'Se ha creado una nueva factura! #' + resp,
          'success'
        )
        this.ResetForm()
      } 
    },
    error => {
      console.log(error);
    })
  }

  ResetForm(): void {
    this.formValuesFactura.reset();
  }

  GetDateTime(){
    var currentDate = new Date();
    const dateNow = formatDate(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", 'en-US');
    return dateNow;
  }

  AlertError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Formulario invalido, revise e intente de nuevo!'
    })
  }

}
