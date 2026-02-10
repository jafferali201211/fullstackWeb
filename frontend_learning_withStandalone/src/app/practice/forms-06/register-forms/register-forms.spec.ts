import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForms } from './register-forms';

describe('RegisterForms', () => {
  let component: RegisterForms;
  let fixture: ComponentFixture<RegisterForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
