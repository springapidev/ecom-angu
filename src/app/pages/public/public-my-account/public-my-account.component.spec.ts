import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMyAccountComponent } from './public-my-account.component';

describe('PublicMyAccountComponent', () => {
  let component: PublicMyAccountComponent;
  let fixture: ComponentFixture<PublicMyAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicMyAccountComponent]
    });
    fixture = TestBed.createComponent(PublicMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
