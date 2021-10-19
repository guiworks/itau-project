import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioQuestionsComponent} from "./components/radio-questions/radio-questions.component";
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbRadioModule} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxQuestionsComponent} from "./components/checkbox-questions/checkbox-questions.component";
import {CheckboxQuestionsDetailModalComponent} from './components/checkbox-questions/modals/checkbox-questions-detail-modal/checkbox-questions-detail-modal.component';


@NgModule({
  declarations: [RadioQuestionsComponent, CheckboxQuestionsComponent, CheckboxQuestionsDetailModalComponent],
  entryComponents: [CheckboxQuestionsDetailModalComponent],
  imports: [
    CommonModule,
    NbRadioModule,
    ReactiveFormsModule,
    NbButtonModule,
    FormsModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule.forChild()
  ],
  exports: [RadioQuestionsComponent, CheckboxQuestionsComponent]
})
export class QuestionsModule {
}
