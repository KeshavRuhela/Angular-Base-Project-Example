import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Making2Component } from './making2.component';

describe('Making2Component', () => {
  let component: Making2Component;
  let fixture: ComponentFixture<Making2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Making2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Making2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
