import { GaleriaComponent } from './galeria/galeria.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
