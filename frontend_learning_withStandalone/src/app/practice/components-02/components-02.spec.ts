import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components02 } from './components-02';

describe('Components02', () => {
  let component: Components02;
  let fixture: ComponentFixture<Components02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
