import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxQuestionsComponent } from './checkbox-questions.component';

describe('CheckboxQuestionsComponent', () => {
  let component: CheckboxQuestionsComponent;
  let fixture: ComponentFixture<CheckboxQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
