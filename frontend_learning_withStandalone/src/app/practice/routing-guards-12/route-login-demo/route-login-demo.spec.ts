import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLoginDemo } from './route-login-demo';

describe('RouteLoginDemo', () => {
  let component: RouteLoginDemo;
  let fixture: ComponentFixture<RouteLoginDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteLoginDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteLoginDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
