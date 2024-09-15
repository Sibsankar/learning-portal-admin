import { TestBed } from '@angular/core/testing';

import { CourseCategoriesService } from './course-categories.service';

describe('CourseCategoriesService', () => {
  let service: CourseCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
