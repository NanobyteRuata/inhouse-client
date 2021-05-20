import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinCheckoutRequestPageComponent } from './checkin-checkout-request-page.component';

describe('CheckinCheckoutRequestPageComponent', () => {
  let component: CheckinCheckoutRequestPageComponent;
  let fixture: ComponentFixture<CheckinCheckoutRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinCheckoutRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinCheckoutRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
