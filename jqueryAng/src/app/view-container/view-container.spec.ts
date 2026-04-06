import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainer } from './view-container';

describe('ViewContainer', () => {
  let component: ViewContainer;
  let fixture: ComponentFixture<ViewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
