import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMode } from './zone-mode';

describe('ZoneMode', () => {
  let component: ZoneMode;
  let fixture: ComponentFixture<ZoneMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneMode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
