import { TestBed, inject } from '@angular/core/testing';

import { TasktranService } from './tasktran.service';

describe('TasktranService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasktranService]
    });
  });

  it('should be created', inject([TasktranService], (service: TasktranService) => {
    expect(service).toBeTruthy();
  }));
});
