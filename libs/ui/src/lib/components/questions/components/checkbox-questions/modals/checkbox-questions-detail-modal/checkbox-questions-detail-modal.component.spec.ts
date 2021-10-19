import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxQuestionsDetailModalComponent } from './checkbox-questions-detail-modal.component';

describe('CheckboxQuestionsDetailModalComponent', () => {
  let component: CheckboxQuestionsDetailModalComponent;
  let fixture: ComponentFixture<CheckboxQuestionsDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxQuestionsDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxQuestionsDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
