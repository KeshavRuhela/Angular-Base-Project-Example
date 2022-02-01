import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watch3Component } from './watch3.component';

describe('Watch3Component', () => {
  let component: Watch3Component;
  let fixture: ComponentFixture<Watch3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Watch3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Watch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
