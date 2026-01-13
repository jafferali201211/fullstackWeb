import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComp1 } from './test-comp1';

describe('TestComp1', () => {
  let component: TestComp1;
  let fixture: ComponentFixture<TestComp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComp1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComp1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
