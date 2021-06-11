import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypePageComponent } from './leave-type-page.component';

describe('LeaveTypeComponent', () => {
  let component: LeaveTypePageComponent;
  let fixture: ComponentFixture<LeaveTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveTypePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
