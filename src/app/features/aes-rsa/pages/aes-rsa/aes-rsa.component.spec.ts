import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AesRsaComponent } from './aes-rsa.component';

describe('AesRsaComponent', () => {
  let component: AesRsaComponent;
  let fixture: ComponentFixture<AesRsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AesRsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AesRsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
