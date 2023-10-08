import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicStationeryComponent } from './public-stationery.component';

describe('PublicStationeryComponent', () => {
  let component: PublicStationeryComponent;
  let fixture: ComponentFixture<PublicStationeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicStationeryComponent]
    });
    fixture = TestBed.createComponent(PublicStationeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
