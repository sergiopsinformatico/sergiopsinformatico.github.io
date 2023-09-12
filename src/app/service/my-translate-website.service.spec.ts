import { TestBed } from '@angular/core/testing';

import { MyTranslateWebsiteService } from './my-translate-website.service';

describe('MyTranslateWebsiteService', () => {
  let service: MyTranslateWebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTranslateWebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
