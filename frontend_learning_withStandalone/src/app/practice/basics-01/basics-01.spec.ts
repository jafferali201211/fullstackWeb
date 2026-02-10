import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basics01 } from './basics-01';

describe('Basics01', () => {
  let component: Basics01;
  let fixture: ComponentFixture<Basics01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basics01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basics01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
