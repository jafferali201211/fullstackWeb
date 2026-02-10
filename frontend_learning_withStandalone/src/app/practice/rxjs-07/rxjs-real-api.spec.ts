import { TestBed } from '@angular/core/testing';

import { RxjsRealApi } from './rxjs-real-api';

describe('RxjsRealApi', () => {
  let service: RxjsRealApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsRealApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
