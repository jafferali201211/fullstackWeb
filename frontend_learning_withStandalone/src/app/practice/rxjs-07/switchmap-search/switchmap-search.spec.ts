import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapSearch } from './switchmap-search';

describe('SwitchmapSearch', () => {
  let component: SwitchmapSearch;
  let fixture: ComponentFixture<SwitchmapSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchmapSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchmapSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
