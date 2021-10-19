import {Component} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'itau-checkbox-questions-detail-modal',
  templateUrl: './checkbox-questions-detail-modal.component.html',
  styleUrls: ['./checkbox-questions-detail-modal.component.scss']
})
export class CheckboxQuestionsDetailModalComponent {
  public title = '';
  public description = '';

  constructor() {
  }
}
