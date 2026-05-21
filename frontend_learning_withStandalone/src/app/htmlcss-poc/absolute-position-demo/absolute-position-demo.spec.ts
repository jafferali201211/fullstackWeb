import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsolutePositionDemo } from './absolute-position-demo';

describe('AbsolutePositionDemo', () => {
  let component: AbsolutePositionDemo;
  let fixture: ComponentFixture<AbsolutePositionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsolutePositionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsolutePositionDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
