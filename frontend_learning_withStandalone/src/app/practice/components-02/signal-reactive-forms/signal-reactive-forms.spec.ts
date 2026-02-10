import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalReactiveForms } from './signal-reactive-forms';

describe('SignalReactiveForms', () => {
  let component: SignalReactiveForms;
  let fixture: ComponentFixture<SignalReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalReactiveForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalReactiveForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
