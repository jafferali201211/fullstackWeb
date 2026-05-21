import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcssPOC } from './htmlcss-poc';

describe('HtmlcssPOC', () => {
  let component: HtmlcssPOC;
  let fixture: ComponentFixture<HtmlcssPOC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlcssPOC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlcssPOC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
