import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routing05 } from './routing-05';

describe('Routing05', () => {
  let component: Routing05;
  let fixture: ComponentFixture<Routing05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routing05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routing05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
