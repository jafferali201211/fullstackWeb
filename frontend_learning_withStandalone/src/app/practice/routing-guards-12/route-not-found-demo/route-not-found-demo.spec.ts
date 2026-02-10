import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNotFoundDemo } from './route-not-found-demo';

describe('RouteNotFoundDemo', () => {
  let component: RouteNotFoundDemo;
  let fixture: ComponentFixture<RouteNotFoundDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteNotFoundDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteNotFoundDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
