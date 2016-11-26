/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileSelectService } from './file-select.service';

describe('FileSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSelectService]
    });
  });

  it('should ...', inject([FileSelectService], (service: FileSelectService) => {
    expect(service).toBeTruthy();
  }));
});
