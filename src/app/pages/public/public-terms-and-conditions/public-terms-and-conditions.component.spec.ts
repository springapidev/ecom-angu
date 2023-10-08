import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTermsAndConditionsComponent } from './public-terms-and-conditions.component';

describe('PublicTermsAndConditionsComponent', () => {
  let component: PublicTermsAndConditionsComponent;
  let fixture: ComponentFixture<PublicTermsAndConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicTermsAndConditionsComponent]
    });
    fixture = TestBed.createComponent(PublicTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
