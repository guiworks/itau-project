import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CheckboxQuestionsList, Coverages} from "@itau/ui";
import {Observable} from "rxjs";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {CheckboxQuestionsDetailModalComponent} from "./modals/checkbox-questions-detail-modal/checkbox-questions-detail-modal.component";
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'itau-checkbox-questions',
  templateUrl: './checkbox-questions.component.html',
  styleUrls: ['./checkbox-questions.component.scss']
})
export class CheckboxQuestionsComponent implements OnInit {
  @ViewChild('checkboxQuestionsDetailModal', {static: true}) checkboxQuestionsDetailModal: CheckboxQuestionsDetailModalComponent | undefined;

  @Input() public checkboxList$: Observable<CheckboxQuestionsList> | undefined

  @Output() continue = new EventEmitter<boolean>()

  public coverages: Coverages[] | undefined;

  public readonly itemForm = this.formBuilder.group({
    questoes: this.formBuilder.array([])
  })

  constructor(private formBuilder: FormBuilder, private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.checkboxList$?.pipe(
      finalize(() => this.fetchItems()))
      .subscribe(data => {
        this.coverages = data?.produtos[0]?.coberturas
      })
  }

  fetchItems() {
    const questions = this.getFormArray('questoes')

    this.coverages?.forEach(data => {
      questions.push(this.addQuestions(data));
    })
  }

  private addQuestions(data?: Coverages): FormGroup {
    return this.formBuilder.group({
      id_cobertura: [data?.id_cobertura, Validators.required],
      escolhido: [this.checkCoverage(data), Validators.required],
    });
  }

  private checkCoverage(data?: Coverages) {
    return !!data?.cobertura_obrigatoria;
  }

  getFormArray(arrayName: string) {
    return this.itemForm.get(arrayName) as FormArray;
  }

  onSubmit(test: any) {
    //TODO: Para checagem de resultados
    console.log(this.itemForm.value);
  }

  openDetailModal(item: Coverages) {
    this.dialogService.open(CheckboxQuestionsDetailModalComponent, {
      context: {
        title: item.nome,
        description: item.descricao,
      },
    });
  }
}
