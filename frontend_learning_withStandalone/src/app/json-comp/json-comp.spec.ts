import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonComp } from './json-comp';

describe('JsonComp', () => {
  let component: JsonComp;
  let fixture: ComponentFixture<JsonComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
