import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrderCompleteComponent } from './public-order-complete.component';

describe('PublicOrderCompleteComponent', () => {
  let component: PublicOrderCompleteComponent;
  let fixture: ComponentFixture<PublicOrderCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicOrderCompleteComponent]
    });
    fixture = TestBed.createComponent(PublicOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
