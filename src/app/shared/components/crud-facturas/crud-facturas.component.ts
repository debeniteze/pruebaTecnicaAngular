import { iFactura } from './../../../data/interfaces/Facturas';
import { FacturasService } from '../../../data/services/facturas.service';
import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2'; 
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-facturas',
  templateUrl: './crud-facturas.component.html',
  styleUrls: ['./crud-facturas.component.scss']
})
export class CrudFacturasComponent implements OnInit {

  oFacturas: iFactura[] = []
  idFactura!: FormGroup;

  constructor(private facturasServices: FacturasService) { 
  }

  ngOnInit(): void {
    this.idFactura = new FormGroup({
      id: new FormControl('')
    })
  }

  onSubmit(){
    this.idFactura.valid === true ? this.GetForIdFacturas(this.idFactura.get('id')?.value) : this.AlertError()
  }

  GetForIdFacturas(id: number) {
    this.facturasServices.GetForId(id).subscribe(resp => {
      resp != null ? this.oFacturas.push(resp) : this.Alert();
    },
    error => {
      console.log(error);
    })
  }

  DeleteFactura(id: bigint){
          Swal.fire({
            title:'Estas Seguro',
            text:'Esto no se puede deshacer',
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Si, Borrarlo'
          }).then((result) => {
            if (result.isConfirmed) {
              this.Delete(id)
              Swal.fire('Borrado!','El elemento ha sido borrado','success');
            }
          })
  }

    Delete(id: bigint){
      this.facturasServices.DeleteFactura(id).subscribe(resp => {
        this.ResetForm();
        },
        error => {
          console.log(error);
        })
    }

    ResetForm(): void {
      this.oFacturas = [];
      this.idFactura.reset();
    }

    Alert(){
      Swal.fire({
        icon: 'info',
        title: 'Sin registros...',
        text: 'No se encontro una factura con el id proporcionado!'
      })
    }
  
    AlertError(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite un id valido!'
      })
    }
  
}
