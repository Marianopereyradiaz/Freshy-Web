import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { FrutasverdurasComponent } from './frutasverduras/frutasverduras.component';
import { OrganicoComponent } from './organico/organico.component';
import { FrutassecasComponent } from './frutassecas/frutassecas.component';
import { PanificadosComponent } from './panificados/panificados.component';
import { CongeladosComponent } from './congelados/congelados.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { LacteosComponent } from './lacteos/lacteos.component';



const router: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuienesSomosComponent,
    ProductosComponent,
    FooterComponent,
    GaleriaComponent,
    ContactoComponent,
    PedidosComponent,
    PromocionesComponent,
    FrutasverdurasComponent,
    OrganicoComponent,
    FrutassecasComponent,
    PanificadosComponent,
    CongeladosComponent,
    AlmacenComponent,
    LacteosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, FooterComponent]
})
export class AppModule { }
