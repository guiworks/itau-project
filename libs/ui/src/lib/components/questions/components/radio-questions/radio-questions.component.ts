import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionForm, QuestionList} from "../../models";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {scrollToId} from "@itau/core";

@Component({
  selector: 'itau-radio-questions',
  templateUrl: './radio-questions.component.html',
  styleUrls: ['./radio-questions.component.scss']
})
export class RadioQuestionsComponent implements OnInit {
  @Input() public questionsList$: Observable<QuestionList[]> | undefined;

  @Output() continue = new EventEmitter<boolean>();

  public formArray: FormArray = new FormArray([]);

  public questionsList: QuestionList[] = [];

  public readonly itemForm = this.formBuilder.group({
    questoes: this.formBuilder.array([])
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.questionsList$?.pipe(finalize(() => this.fetchItems()))
      .subscribe(data => {
        this.questionsList = data;
      })
  }

  fetchItems() {
    const questions = this.getFormArray('questoes')

    this.questionsList.forEach(data => {
      questions.push(this.addQuestions(data.id_questao, ''));
    })
  }

  onSubmit({value, valid}: { value: QuestionForm, valid: boolean }) {
    if (!valid) return

    //TODO: Para checagem de resultados
    console.log(value);

    this.continue.emit(true)
  }

  private addQuestions(id_questao?: string, id_resposta?: string): FormGroup {
    return this.formBuilder.group({
      id_questao: [id_questao, Validators.required],
      id_resposta: [id_resposta, Validators.required],
    });
  }

  getFormArray(arrayName: string) {
    return this.itemForm.get(arrayName) as FormArray;
  }
}


