import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsForkjoinCombinelatestDemo } from './rxjs-forkjoin-combinelatest-demo';

describe('RxjsForkjoinCombinelatestDemo', () => {
  let component: RxjsForkjoinCombinelatestDemo;
  let fixture: ComponentFixture<RxjsForkjoinCombinelatestDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsForkjoinCombinelatestDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsForkjoinCombinelatestDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
