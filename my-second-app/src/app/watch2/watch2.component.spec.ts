import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watch2Component } from './watch2.component';

describe('Watch2Component', () => {
  let component: Watch2Component;
  let fixture: ComponentFixture<Watch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Watch2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Watch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
