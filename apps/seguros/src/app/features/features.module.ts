import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {MainContainersComponent} from "./main-container/containers/main-containers.component";
import {NgbDropdownModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NbIconModule, NbLayoutModule} from "@nebular/theme";


@NgModule({
  declarations: [
    MainContainersComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NgbNavModule,
    NgbDropdownModule,
    NbLayoutModule,
    NbIconModule
  ]
})
export class FeaturesModule { }
