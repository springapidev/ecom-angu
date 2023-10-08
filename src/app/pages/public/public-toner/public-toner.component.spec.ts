import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTonerComponent } from './public-toner.component';

describe('PublicTonerComponent', () => {
  let component: PublicTonerComponent;
  let fixture: ComponentFixture<PublicTonerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicTonerComponent]
    });
    fixture = TestBed.createComponent(PublicTonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
