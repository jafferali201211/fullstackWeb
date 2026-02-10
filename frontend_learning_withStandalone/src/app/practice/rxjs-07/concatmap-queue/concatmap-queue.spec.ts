import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapQueue } from './concatmap-queue';

describe('ConcatmapQueue', () => {
  let component: ConcatmapQueue;
  let fixture: ComponentFixture<ConcatmapQueue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatmapQueue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatmapQueue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
