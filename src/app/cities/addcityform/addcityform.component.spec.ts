/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddcityformComponent } from './addcityform.component';

describe('AddcityformComponent', () => {
  let component: AddcityformComponent;
  let fixture: ComponentFixture<AddcityformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcityformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcityformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
