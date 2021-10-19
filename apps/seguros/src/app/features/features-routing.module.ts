import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainersComponent} from "./main-container/containers/main-containers.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainContainersComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '',
    component: MainContainersComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FeaturesRoutingModule {
}
