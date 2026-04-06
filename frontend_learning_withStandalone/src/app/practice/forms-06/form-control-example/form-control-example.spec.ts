import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlExample } from './form-control-example';

describe('FormControlExample', () => {
  let component: FormControlExample;
  let fixture: ComponentFixture<FormControlExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
