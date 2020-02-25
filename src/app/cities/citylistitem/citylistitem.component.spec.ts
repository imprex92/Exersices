/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitylistitemComponent } from './citylistitem.component';

describe('CitylistitemComponent', () => {
  let component: CitylistitemComponent;
  let fixture: ComponentFixture<CitylistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitylistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitylistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
