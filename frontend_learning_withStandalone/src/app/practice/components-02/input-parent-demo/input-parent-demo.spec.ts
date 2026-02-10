import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputParentDemo } from './input-parent-demo';

describe('InputParentDemo', () => {
  let component: InputParentDemo;
  let fixture: ComponentFixture<InputParentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputParentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputParentDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
