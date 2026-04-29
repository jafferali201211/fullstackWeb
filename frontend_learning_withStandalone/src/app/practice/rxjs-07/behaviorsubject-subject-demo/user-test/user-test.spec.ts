import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTest } from './user-test';

describe('UserTest', () => {
  let component: UserTest;
  let fixture: ComponentFixture<UserTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
