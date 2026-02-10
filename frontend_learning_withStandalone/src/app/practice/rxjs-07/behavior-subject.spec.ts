import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectService } from './behavior-subject';

describe('BehaviorSubject', () => {
  let service: BehaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
