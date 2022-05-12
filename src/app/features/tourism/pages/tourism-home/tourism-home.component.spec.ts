import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismHomeComponent } from './tourism-home.component';

describe('TourismHomeComponent', () => {
  let component: TourismHomeComponent;
  let fixture: ComponentFixture<TourismHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourismHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
