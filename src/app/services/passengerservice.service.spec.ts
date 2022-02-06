import { TestBed } from '@angular/core/testing';

import { PassengerserviceService } from './passengerservice.service';

describe('PassengerserviceService', () => {
  let service: PassengerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
