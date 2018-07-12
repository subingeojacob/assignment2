import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntemployeeComponent } from './intemployee.component';

describe('IntemployeeComponent', () => {
  let component: IntemployeeComponent;
  let fixture: ComponentFixture<IntemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
