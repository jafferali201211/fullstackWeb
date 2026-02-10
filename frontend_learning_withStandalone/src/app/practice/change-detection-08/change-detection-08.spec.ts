import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetection08 } from './change-detection-08';

describe('ChangeDetection08', () => {
  let component: ChangeDetection08;
  let fixture: ComponentFixture<ChangeDetection08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetection08]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetection08);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
