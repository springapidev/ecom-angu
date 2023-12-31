import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAboutComponent } from './public-about.component';

describe('PublicAboutComponent', () => {
  let component: PublicAboutComponent;
  let fixture: ComponentFixture<PublicAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicAboutComponent]
    });
    fixture = TestBed.createComponent(PublicAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
