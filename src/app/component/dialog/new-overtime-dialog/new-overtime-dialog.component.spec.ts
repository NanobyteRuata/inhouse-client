import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOvertimeDialogComponent } from './new-overtime-dialog.component';

describe('NewOvertimeDialogComponent', () => {
  let component: NewOvertimeDialogComponent;
  let fixture: ComponentFixture<NewOvertimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOvertimeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOvertimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
