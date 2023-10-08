import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPrintersComponent } from './public-printers.component';

describe('PublicPrintersComponent', () => {
  let component: PublicPrintersComponent;
  let fixture: ComponentFixture<PublicPrintersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicPrintersComponent]
    });
    fixture = TestBed.createComponent(PublicPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
