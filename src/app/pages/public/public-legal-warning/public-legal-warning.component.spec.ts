import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLegalWarningComponent } from './public-legal-warning.component';

describe('PublicLegalWarningComponent', () => {
  let component: PublicLegalWarningComponent;
  let fixture: ComponentFixture<PublicLegalWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicLegalWarningComponent]
    });
    fixture = TestBed.createComponent(PublicLegalWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
