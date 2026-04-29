import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFormArray } from './skill-form-array';

describe('SkillFormArray', () => {
  let component: SkillFormArray;
  let fixture: ComponentFixture<SkillFormArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillFormArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillFormArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
