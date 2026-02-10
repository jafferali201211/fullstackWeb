import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx10 } from './ngrx-10';

describe('Ngrx10', () => {
  let component: Ngrx10;
  let fixture: ComponentFixture<Ngrx10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngrx10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
