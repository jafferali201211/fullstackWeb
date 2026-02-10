import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDashboardDemo } from './route-dashboard-demo';

describe('RouteDashboardDemo', () => {
  let component: RouteDashboardDemo;
  let fixture: ComponentFixture<RouteDashboardDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDashboardDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteDashboardDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
