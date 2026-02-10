import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDi04 } from './services-di-04';

describe('ServicesDi04', () => {
  let component: ServicesDi04;
  let fixture: ComponentFixture<ServicesDi04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDi04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDi04);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
