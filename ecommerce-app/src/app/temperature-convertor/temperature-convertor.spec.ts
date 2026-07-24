import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConvertor } from './temperature-convertor';

describe('TemperatureConvertor', () => {
  let component: TemperatureConvertor;
  let fixture: ComponentFixture<TemperatureConvertor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureConvertor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureConvertor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
