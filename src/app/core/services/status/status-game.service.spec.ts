import { TestBed } from '@angular/core/testing';

import { StatusGameService } from './status-game.service';

describe('StatusGameService', () => {
  let service: StatusGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
