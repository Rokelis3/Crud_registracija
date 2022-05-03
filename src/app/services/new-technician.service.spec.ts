import { TestBed } from '@angular/core/testing';

import { NewTechnicianService } from './new-technician.service';

describe('NewTechnicianService', () => {
  let service: NewTechnicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTechnicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
