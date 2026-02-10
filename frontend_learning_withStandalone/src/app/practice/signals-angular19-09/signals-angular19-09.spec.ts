import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsAngular1909 } from './signals-angular19-09';

describe('SignalsAngular1909', () => {
  let component: SignalsAngular1909;
  let fixture: ComponentFixture<SignalsAngular1909>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsAngular1909]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsAngular1909);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
