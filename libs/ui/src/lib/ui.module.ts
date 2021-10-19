import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbDialogModule} from "@nebular/theme";

@NgModule({
  imports: [
    CommonModule,
    NbDialogModule.forRoot(),
  ],
  declarations: [],
})
export class UiModule {
}
