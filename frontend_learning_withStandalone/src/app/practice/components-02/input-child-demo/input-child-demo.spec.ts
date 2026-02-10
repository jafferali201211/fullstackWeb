import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildDemo } from './input-child-demo';

describe('InputChildDemo', () => {
  let component: InputChildDemo;
  let fixture: ComponentFixture<InputChildDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputChildDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputChildDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
