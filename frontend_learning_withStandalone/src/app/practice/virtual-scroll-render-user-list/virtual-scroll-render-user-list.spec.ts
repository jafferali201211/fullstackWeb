import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollRenderUserList } from './virtual-scroll-render-user-list';

describe('VirtualScrollRenderUserList', () => {
  let component: VirtualScrollRenderUserList;
  let fixture: ComponentFixture<VirtualScrollRenderUserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualScrollRenderUserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScrollRenderUserList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
