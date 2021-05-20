import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectComponentComponent } from './custom-select-component.component';

describe('CustomSelectComponentComponent', () => {
  let component: CustomSelectComponentComponent;
  let fixture: ComponentFixture<CustomSelectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
