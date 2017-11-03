import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerConfigComponent } from './datepicker-config.component';

describe('DatepickerConfigComponent', () => {
  let component: DatepickerConfigComponent;
  let fixture: ComponentFixture<DatepickerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerConfigComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
