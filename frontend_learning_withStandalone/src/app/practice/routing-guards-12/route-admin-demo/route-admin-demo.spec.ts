import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdminDemo } from './route-admin-demo';

describe('RouteAdminDemo', () => {
  let component: RouteAdminDemo;
  let fixture: ComponentFixture<RouteAdminDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteAdminDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteAdminDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
