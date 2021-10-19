import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CheckboxQuestionsList, QuestionList} from "@itau/ui";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<QuestionList[]> {
    return this.http.get<QuestionList[]>('/questions');
  }

  getAllCheckboxQuestions(): Observable<CheckboxQuestionsList> {
    return this.http.get<CheckboxQuestionsList>('/offers');
  }
}
