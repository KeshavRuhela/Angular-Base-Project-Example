import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watch4Component } from './watch4.component';

describe('Watch4Component', () => {
  let component: Watch4Component;
  let fixture: ComponentFixture<Watch4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Watch4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Watch4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
