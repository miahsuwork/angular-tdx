import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismSearchComponent } from './tourism-search.component';

describe('TourismSearchComponent', () => {
  let component: TourismSearchComponent;
  let fixture: ComponentFixture<TourismSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourismSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
