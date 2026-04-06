import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSwitchMap } from './search-switch-map';

describe('SearchSwitchMap', () => {
  let component: SearchSwitchMap;
  let fixture: ComponentFixture<SearchSwitchMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSwitchMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSwitchMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
