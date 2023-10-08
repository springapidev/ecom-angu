import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicShippingComponent } from './public-shipping.component';

describe('PublicShippingComponent', () => {
  let component: PublicShippingComponent;
  let fixture: ComponentFixture<PublicShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicShippingComponent]
    });
    fixture = TestBed.createComponent(PublicShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
