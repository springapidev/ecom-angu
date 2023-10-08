import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSobreCartucheaComponent } from './public-sobre-cartuchea.component';

describe('PublicSobreCartucheaComponent', () => {
  let component: PublicSobreCartucheaComponent;
  let fixture: ComponentFixture<PublicSobreCartucheaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicSobreCartucheaComponent]
    });
    fixture = TestBed.createComponent(PublicSobreCartucheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
