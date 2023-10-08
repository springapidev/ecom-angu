import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComputingComponent } from './public-computing.component';

describe('PublicComputingComponent', () => {
  let component: PublicComputingComponent;
  let fixture: ComponentFixture<PublicComputingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicComputingComponent]
    });
    fixture = TestBed.createComponent(PublicComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
