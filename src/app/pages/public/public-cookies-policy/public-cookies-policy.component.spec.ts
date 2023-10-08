import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCookiesPolicyComponent } from './public-cookies-policy.component';

describe('PublicCookiesPolicyComponent', () => {
  let component: PublicCookiesPolicyComponent;
  let fixture: ComponentFixture<PublicCookiesPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicCookiesPolicyComponent]
    });
    fixture = TestBed.createComponent(PublicCookiesPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
