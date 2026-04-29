import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentB } from './compoent-b';

describe('CompoentB', () => {
  let component: CompoentB;
  let fixture: ComponentFixture<CompoentB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoentB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoentB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
