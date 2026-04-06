import { TestBed } from '@angular/core/testing';

import { Jsonplace } from './jsonplace';

describe('Jsonplace', () => {
  let service: Jsonplace;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jsonplace);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
