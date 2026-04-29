import { TestBed } from '@angular/core/testing';

import { ShareReplayPostStateService } from './share-replay-post-state-service';

describe('ShareReplayPostStateService', () => {
  let service: ShareReplayPostStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareReplayPostStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
