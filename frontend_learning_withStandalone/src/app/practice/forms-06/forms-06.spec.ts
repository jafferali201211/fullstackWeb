import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms06 } from './forms-06';

describe('Forms06', () => {
  let component: Forms06;
  let fixture: ComponentFixture<Forms06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forms06]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms06);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
