import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeftComponent } from './admin-left.component';

describe('AdminLeftComponent', () => {
  let component: AdminLeftComponent;
  let fixture: ComponentFixture<AdminLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLeftComponent]
    });
    fixture = TestBed.createComponent(AdminLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
