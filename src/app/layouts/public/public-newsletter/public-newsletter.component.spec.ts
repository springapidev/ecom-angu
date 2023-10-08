import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNewsletterComponent } from './public-newsletter.component';

describe('PublicNewsletterComponent', () => {
  let component: PublicNewsletterComponent;
  let fixture: ComponentFixture<PublicNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicNewsletterComponent]
    });
    fixture = TestBed.createComponent(PublicNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
