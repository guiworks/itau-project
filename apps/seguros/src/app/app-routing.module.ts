import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '',
    canActivate: [], //Módulo de autenticação inativo
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  },
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      anchorScrolling: 'enabled'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
