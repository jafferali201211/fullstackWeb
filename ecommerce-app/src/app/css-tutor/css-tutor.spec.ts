import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTutor } from './css-tutor';

describe('CssTutor', () => {
  let component: CssTutor;
  let fixture: ComponentFixture<CssTutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssTutor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssTutor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
