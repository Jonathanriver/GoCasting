import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitarUserPage } from './invitar-user.page';

const routes: Routes = [
  {
    path: '',
    component: InvitarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitarUserPageRoutingModule {}
