import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPluginComponent } from './common-plugin.component';

describe('CommonPluginComponent', () => {
  let component: CommonPluginComponent;
  let fixture: ComponentFixture<CommonPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
