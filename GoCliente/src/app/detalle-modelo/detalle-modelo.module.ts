import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleModeloPageRoutingModule } from './detalle-modelo-routing.module';

import { DetalleModeloPage } from './detalle-modelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleModeloPageRoutingModule
  ],
  declarations: [DetalleModeloPage]
})
export class DetalleModeloPageModule {}
