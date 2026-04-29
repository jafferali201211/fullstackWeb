import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentA } from './compoent-a';

describe('CompoentA', () => {
  let component: CompoentA;
  let fixture: ComponentFixture<CompoentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoentA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
