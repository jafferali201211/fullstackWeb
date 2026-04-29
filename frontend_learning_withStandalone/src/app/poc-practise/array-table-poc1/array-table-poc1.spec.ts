import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTablePoc1 } from './array-table-poc1';

describe('ArrayTablePoc1', () => {
  let component: ArrayTablePoc1;
  let fixture: ComponentFixture<ArrayTablePoc1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayTablePoc1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayTablePoc1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
