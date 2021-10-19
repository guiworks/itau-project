import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioQuestionsComponent } from './radio-questions.component';

describe('QuestionsComponent', () => {
  let component: RadioQuestionsComponent;
  let fixture: ComponentFixture<RadioQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
