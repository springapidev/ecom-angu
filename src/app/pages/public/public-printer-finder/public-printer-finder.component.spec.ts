import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPrinterFinderComponent } from './public-printer-finder.component';

describe('PublicPrinterFinderComponent', () => {
  let component: PublicPrinterFinderComponent;
  let fixture: ComponentFixture<PublicPrinterFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicPrinterFinderComponent]
    });
    fixture = TestBed.createComponent(PublicPrinterFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
