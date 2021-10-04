import { CrearFacturaComponent } from './shared/components/crear-factura/crear-factura.component';
import { CrudFacturasComponent } from './shared/components/crud-facturas/crud-facturas.component';
import { ViewFacturaComponent } from './shared/components/view-factura/view-factura.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: CrudFacturasComponent
  },
  {
    path: 'view/:id',
    component: ViewFacturaComponent
  },
  {
    path: 'add',
    component: CrearFacturaComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


