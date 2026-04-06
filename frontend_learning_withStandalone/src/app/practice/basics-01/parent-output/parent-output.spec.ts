import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOutput } from './parent-output';

describe('ParentOutput', () => {
  let component: ParentOutput;
  let fixture: ComponentFixture<ParentOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
