/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemListService } from './itemList.service';

describe('Service: ItemList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemListService]
    });
  });

  it('should ...', inject([ItemListService], (service: ItemListService) => {
    expect(service).toBeTruthy();
  }));
});
