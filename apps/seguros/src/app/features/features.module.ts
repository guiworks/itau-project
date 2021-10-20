import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {MainContainersComponent} from "./main-container/containers/main-containers.component";
import {NbIconModule, NbLayoutModule} from "@nebular/theme";

@NgModule({
  declarations: [
    MainContainersComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NbLayoutModule,
    NbIconModule
  ]
})
export class FeaturesModule { }
