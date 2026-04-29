import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputSignalComponent } from './child-input-signal-component';

describe('ChildInputSignalComponent', () => {
  let component: ChildInputSignalComponent;
  let fixture: ComponentFixture<ChildInputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildInputSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildInputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
