import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExhaustmapSubmitDemo } from './rxjs-exhaustmap-submit-demo';

describe('RxjsExhaustmapSubmitDemo', () => {
  let component: RxjsExhaustmapSubmitDemo;
  let fixture: ComponentFixture<RxjsExhaustmapSubmitDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsExhaustmapSubmitDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsExhaustmapSubmitDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
