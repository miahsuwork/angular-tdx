import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismRedirectComponent } from './tourism-redirect.component';

describe('TourismRedirectComponent', () => {
  let component: TourismRedirectComponent;
  let fixture: ComponentFixture<TourismRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourismRedirectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
