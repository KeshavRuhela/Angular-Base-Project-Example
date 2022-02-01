import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Making1Component } from './making1.component';

describe('Making1Component', () => {
  let component: Making1Component;
  let fixture: ComponentFixture<Making1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Making1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Making1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
