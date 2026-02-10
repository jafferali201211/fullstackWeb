import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs07 } from './rxjs-07';

describe('Rxjs07', () => {
  let component: Rxjs07;
  let fixture: ComponentFixture<Rxjs07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjs07]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjs07);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
