import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeaveDialogComponent } from './new-leave-dialog.component';

describe('NewLeaveDialogComponent', () => {
  let component: NewLeaveDialogComponent;
  let fixture: ComponentFixture<NewLeaveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLeaveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
