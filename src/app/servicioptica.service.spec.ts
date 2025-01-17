import { TestBed } from '@angular/core/testing';

import { ServiciopticaService } from './servicioptica.service';

describe('ServiciopticaService', () => {
  let service: ServiciopticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
