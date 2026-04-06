import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutParent } from './layout-parent';

describe('LayoutParent', () => {
  let component: LayoutParent;
  let fixture: ComponentFixture<LayoutParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
