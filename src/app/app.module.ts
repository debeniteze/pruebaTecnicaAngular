import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CrudFacturasComponent } from './shared/components/crud-facturas/crud-facturas.component';
import { ViewFacturaComponent } from './shared/components/view-factura/view-factura.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearFacturaComponent } from './shared/components/crear-factura/crear-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudFacturasComponent,
    ViewFacturaComponent,
    CrearFacturaComponent,
    SidebarMenuComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
