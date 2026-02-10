import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMergemapParallelSaveDemo } from './rxjs-mergemap-parallel-save-demo';

describe('RxjsMergemapParallelSaveDemo', () => {
  let component: RxjsMergemapParallelSaveDemo;
  let fixture: ComponentFixture<RxjsMergemapParallelSaveDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsMergemapParallelSaveDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsMergemapParallelSaveDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
