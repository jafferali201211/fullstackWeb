import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificityDemo } from './specificity-demo';

describe('SpecificityDemo', () => {
  let component: SpecificityDemo;
  let fixture: ComponentFixture<SpecificityDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificityDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificityDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
