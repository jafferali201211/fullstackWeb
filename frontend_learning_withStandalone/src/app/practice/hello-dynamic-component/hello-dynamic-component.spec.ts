import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDynamicComponent } from './hello-dynamic-component';

describe('HelloDynamicComponent', () => {
  let component: HelloDynamicComponent;
  let fixture: ComponentFixture<HelloDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
