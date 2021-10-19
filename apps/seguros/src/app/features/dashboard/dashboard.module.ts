import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardContainerComponent} from "./containers/dashboard-container.component";
import {NbButtonModule, NbLayoutModule} from "@nebular/theme";
import {QuestionsModule} from "@itau/ui";


@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    QuestionsModule,
    NbButtonModule,
  ]
})
export class DashboardModule { }
