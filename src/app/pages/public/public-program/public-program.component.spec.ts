import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProgramComponent } from './public-program.component';

describe('PublicProgramComponent', () => {
  let component: PublicProgramComponent;
  let fixture: ComponentFixture<PublicProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicProgramComponent]
    });
    fixture = TestBed.createComponent(PublicProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
