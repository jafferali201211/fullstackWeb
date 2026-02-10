import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSwitchmapRealtimeSearchDemo } from './rxjs-switchmap-realtime-search-demo';

describe('RxjsSwitchmapRealtimeSearchDemo', () => {
  let component: RxjsSwitchmapRealtimeSearchDemo;
  let fixture: ComponentFixture<RxjsSwitchmapRealtimeSearchDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSwitchmapRealtimeSearchDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsSwitchmapRealtimeSearchDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
