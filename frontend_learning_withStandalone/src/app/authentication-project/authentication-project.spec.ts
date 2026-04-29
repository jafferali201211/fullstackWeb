import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationProject } from './authentication-project';

describe('AuthenticationProject', () => {
  let component: AuthenticationProject;
  let fixture: ComponentFixture<AuthenticationProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
