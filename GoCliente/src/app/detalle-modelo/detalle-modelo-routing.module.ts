import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleModeloPage } from './detalle-modelo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleModeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleModeloPageRoutingModule {}
