import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeedSelectPage } from './seed-select.page';

const routes: Routes = [
  {
    path: '',
    component: SeedSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedSelectPageRoutingModule {}
