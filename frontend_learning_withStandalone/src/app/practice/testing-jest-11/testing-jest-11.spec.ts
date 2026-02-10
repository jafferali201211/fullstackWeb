import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingJest11 } from './testing-jest-11';

describe('TestingJest11', () => {
  let component: TestingJest11;
  let fixture: ComponentFixture<TestingJest11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingJest11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingJest11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
