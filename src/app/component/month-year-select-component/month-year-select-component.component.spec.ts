import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearSelectComponentComponent } from './month-year-select-component.component';

describe('MonthYearSelectComponentComponent', () => {
  let component: MonthYearSelectComponentComponent;
  let fixture: ComponentFixture<MonthYearSelectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthYearSelectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthYearSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
