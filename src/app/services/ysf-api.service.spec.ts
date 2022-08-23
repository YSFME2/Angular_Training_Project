import { TestBed } from '@angular/core/testing';

import { YsfApiService } from './ysf-api.service';

describe('YsfApiService', () => {
  let service: YsfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YsfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
