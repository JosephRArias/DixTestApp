import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoveltiesPage } from './novelties.page';

const routes: Routes = [
  {
    path: '',
    component: NoveltiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoveltiesPageRoutingModule {}
