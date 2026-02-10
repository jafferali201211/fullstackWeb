import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatmapQueueSaveDemo } from './rxjs-concatmap-queue-save-demo';

describe('RxjsConcatmapQueueSaveDemo', () => {
  let component: RxjsConcatmapQueueSaveDemo;
  let fixture: ComponentFixture<RxjsConcatmapQueueSaveDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsConcatmapQueueSaveDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsConcatmapQueueSaveDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
