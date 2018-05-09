import { TestBed, inject } from '@angular/core/testing';

import { ServerinfoService } from './serverinfo.service';

describe('ServerinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerinfoService]
    });
  });

  it('should be created', inject([ServerinfoService], (service: ServerinfoService) => {
    expect(service).toBeTruthy();
  }));
});
