import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionParent } from './change-detection-parent';

describe('ChangeDetectionParent', () => {
  let component: ChangeDetectionParent;
  let fixture: ComponentFixture<ChangeDetectionParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
