import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionChild } from './change-detection-child';

describe('ChangeDetectionChild', () => {
  let component: ChangeDetectionChild;
  let fixture: ComponentFixture<ChangeDetectionChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
