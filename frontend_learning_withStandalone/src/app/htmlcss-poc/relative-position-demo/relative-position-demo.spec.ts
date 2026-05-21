import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativePositionDemo } from './relative-position-demo';

describe('RelativePositionDemo', () => {
  let component: RelativePositionDemo;
  let fixture: ComponentFixture<RelativePositionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelativePositionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativePositionDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
