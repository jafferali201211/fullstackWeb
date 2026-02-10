import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directives03 } from './directives-03';

describe('Directives03', () => {
  let component: Directives03;
  let fixture: ComponentFixture<Directives03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directives03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directives03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
