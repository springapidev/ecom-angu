import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInkCartridgesComponent } from './public-ink-cartridges.component';

describe('PublicInkCartridgesComponent', () => {
  let component: PublicInkCartridgesComponent;
  let fixture: ComponentFixture<PublicInkCartridgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicInkCartridgesComponent]
    });
    fixture = TestBed.createComponent(PublicInkCartridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
