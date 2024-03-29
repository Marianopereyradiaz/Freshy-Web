import { GaleriaComponent } from './galeria/galeria.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { FrutasverdurasComponent } from './frutasverduras/frutasverduras.component';
import { OrganicoComponent} from './organico/organico.component';
import { FrutassecasComponent } from './frutassecas/frutassecas.component';
import { PanificadosComponent } from './panificados/panificados.component';
import { CongeladosComponent } from './congelados/congelados.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { LacteosComponent } from './lacteos/lacteos.component';
import { CafeteriaComponent} from './cafeteria/cafeteria.component';

const routes: Routes = [
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path: 'promociones',
    component: PromocionesComponent
  },
  {
    path: 'frutasverduras',
    component: FrutasverdurasComponent
  },
  {
    path: 'cafeteria',
    component: CafeteriaComponent
  },
  {
    path: 'almacen',
    component: AlmacenComponent
  },
  {
    path: 'congelados',
    component: CongeladosComponent
  },
  {
    path: 'lacteos',
    component: LacteosComponent
  },
  {
    path: 'panificados',
    component: PanificadosComponent
  },
  {
    path: 'frutassecas',
    component: FrutassecasComponent
  },
  {
    path: 'organico',
    component: OrganicoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
