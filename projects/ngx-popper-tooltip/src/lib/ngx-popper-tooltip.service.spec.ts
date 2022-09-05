import { TestBed } from '@angular/core/testing';

import { NgxPopperTooltipService } from './ngx-popper-tooltip.service';

describe('NgxPopperTooltipService', () => {
  let service: NgxPopperTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPopperTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
