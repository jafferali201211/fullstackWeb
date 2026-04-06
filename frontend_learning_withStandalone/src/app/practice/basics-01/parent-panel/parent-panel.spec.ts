import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPanel } from './parent-panel';

describe('ParentPanel', () => {
  let component: ParentPanel;
  let fixture: ComponentFixture<ParentPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
