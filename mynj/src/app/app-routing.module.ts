import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'map-select',
    loadChildren: () =>
      import('./pages/map-select/map-select.module').then(
        (m) => m.MapSelectPageModule
      ),
  },

  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'write-town',
    loadChildren: () =>
      import('./pages/write-town/write-town.module').then(
        (m) => m.WriteTownPageModule
      ),
  },
  {
    path: 'mask-select',
    loadChildren: () => import('./pages/mask-select/mask-select.module').then( m => m.MaskSelectPageModule)
  },
  {
    path: 'seed-select',
    loadChildren: () => import('./pages/seed-select/seed-select.module').then( m => m.SeedSelectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
