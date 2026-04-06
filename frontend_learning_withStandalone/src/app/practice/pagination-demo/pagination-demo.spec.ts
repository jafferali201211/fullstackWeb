import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDemo } from './pagination-demo';

describe('PaginationDemo', () => {
  let component: PaginationDemo;
  let fixture: ComponentFixture<PaginationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
