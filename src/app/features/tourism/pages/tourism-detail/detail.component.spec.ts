import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: TourismDetailComponent;
  let fixture: ComponentFixture<TourismDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourismDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
