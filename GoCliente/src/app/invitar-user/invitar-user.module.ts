import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitarUserPageRoutingModule } from './invitar-user-routing.module';

import { InvitarUserPage } from './invitar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitarUserPageRoutingModule
  ],
  declarations: [InvitarUserPage]
})
export class InvitarUserPageModule {}
