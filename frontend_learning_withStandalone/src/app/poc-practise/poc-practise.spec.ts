import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POCPractise } from './poc-practise';

describe('POCPractise', () => {
  let component: POCPractise;
  let fixture: ComponentFixture<POCPractise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POCPractise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POCPractise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
