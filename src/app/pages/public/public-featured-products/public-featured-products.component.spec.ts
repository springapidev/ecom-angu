import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFeaturedProductsComponent } from './public-featured-products.component';

describe('PublicFeaturedProductsComponent', () => {
  let component: PublicFeaturedProductsComponent;
  let fixture: ComponentFixture<PublicFeaturedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicFeaturedProductsComponent]
    });
    fixture = TestBed.createComponent(PublicFeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
