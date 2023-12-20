import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProductSearchComponent } from './public-product-search.component';

describe('PublicProductSearchComponent', () => {
  let component: PublicProductSearchComponent;
  let fixture: ComponentFixture<PublicProductSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicProductSearchComponent]
    });
    fixture = TestBed.createComponent(PublicProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
