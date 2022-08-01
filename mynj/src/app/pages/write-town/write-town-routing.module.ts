import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteTownPage } from './write-town.page';

const routes: Routes = [
  {
    path: '',
    component: WriteTownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteTownPageRoutingModule {}
