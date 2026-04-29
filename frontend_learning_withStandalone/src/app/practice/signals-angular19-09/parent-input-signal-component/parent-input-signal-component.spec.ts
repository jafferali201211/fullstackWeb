import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInputSignalComponent } from './parent-input-signal-component';

describe('ParentInputSignalComponent', () => {
  let component: ParentInputSignalComponent;
  let fixture: ComponentFixture<ParentInputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentInputSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentInputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
