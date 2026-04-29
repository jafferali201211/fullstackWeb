import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectSubjectDemo } from './behaviorsubject-subject-demo';

describe('BehaviorsubjectSubjectDemo', () => {
  let component: BehaviorsubjectSubjectDemo;
  let fixture: ComponentFixture<BehaviorsubjectSubjectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorsubjectSubjectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorsubjectSubjectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
