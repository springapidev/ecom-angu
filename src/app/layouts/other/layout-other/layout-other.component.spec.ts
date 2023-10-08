import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOtherComponent } from './layout-other.component';

describe('LayoutOtherComponent', () => {
  let component: LayoutOtherComponent;
  let fixture: ComponentFixture<LayoutOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutOtherComponent]
    });
    fixture = TestBed.createComponent(LayoutOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
