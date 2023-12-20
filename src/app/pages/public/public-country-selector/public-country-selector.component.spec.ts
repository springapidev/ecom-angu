import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCountrySelectorComponent } from './public-country-selector.component';

describe('PublicCountrySelectorComponent', () => {
  let component: PublicCountrySelectorComponent;
  let fixture: ComponentFixture<PublicCountrySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicCountrySelectorComponent]
    });
    fixture = TestBed.createComponent(PublicCountrySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
