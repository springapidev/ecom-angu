import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAnnonementComponent } from './public-annonement.component';

describe('PublicAnnonementComponent', () => {
  let component: PublicAnnonementComponent;
  let fixture: ComponentFixture<PublicAnnonementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicAnnonementComponent]
    });
    fixture = TestBed.createComponent(PublicAnnonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
