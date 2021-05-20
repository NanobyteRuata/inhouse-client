import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDetailPageComponent } from './attendance-detail-page.component';

describe('AttendanceDetailPageComponent', () => {
  let component: AttendanceDetailPageComponent;
  let fixture: ComponentFixture<AttendanceDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
