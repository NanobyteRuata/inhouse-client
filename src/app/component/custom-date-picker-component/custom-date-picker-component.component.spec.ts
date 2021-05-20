import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatePickerComponentComponent } from './custom-date-picker-component.component';

describe('CustomDatePickerComponentComponent', () => {
  let component: CustomDatePickerComponentComponent;
  let fixture: ComponentFixture<CustomDatePickerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDatePickerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatePickerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
