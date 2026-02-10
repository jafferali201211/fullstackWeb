import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormArray } from './employee-form-array';

describe('EmployeeFormArray', () => {
  let component: EmployeeFormArray;
  let fixture: ComponentFixture<EmployeeFormArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFormArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
