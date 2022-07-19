import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateClientComponent } from './date-client.component';

describe('DateClientComponent', () => {
  let component: DateClientComponent;
  let fixture: ComponentFixture<DateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
