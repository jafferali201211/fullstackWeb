import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInput } from './parent-input';

describe('ParentInput', () => {
  let component: ParentInput;
  let fixture: ComponentFixture<ParentInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
