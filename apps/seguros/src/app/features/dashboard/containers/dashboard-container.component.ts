import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {CheckboxQuestionsList, QuestionList} from "@itau/ui";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'itau-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  public questionList$: Observable<QuestionList[]> | undefined
  public checkboxList$: Observable<CheckboxQuestionsList> | undefined
  public showCheckboxesArea: boolean | undefined;
  public showAddress: boolean | undefined;

  constructor(private dashboardService: DashboardService, private router: Router, private scroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.questionList$ = this.dashboardService.getAllQuestions()
    this.checkboxList$ = this.dashboardService.getAllCheckboxQuestions();
  }

  fetchAnswerQuestion(isFinished: boolean) {
    if (isFinished) {
      this.showCheckboxesArea = true;
    }
  }

  fetchAnswerCheckbox(isFinished: boolean) {
    if (isFinished) {
      this.showAddress = true;
    }
  }

  scrollTo(questions: string) {
    document.getElementById(questions)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
