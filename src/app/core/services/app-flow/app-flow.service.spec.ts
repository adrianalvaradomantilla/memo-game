import { TestBed } from '@angular/core/testing';

import { AppFlowService } from './app-flow.service';

describe('AppFlowService', () => {
  let service: AppFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
