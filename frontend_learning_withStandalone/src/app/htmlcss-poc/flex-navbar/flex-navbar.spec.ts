import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexNavbar } from './flex-navbar';

describe('FlexNavbar', () => {
  let component: FlexNavbar;
  let fixture: ComponentFixture<FlexNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
