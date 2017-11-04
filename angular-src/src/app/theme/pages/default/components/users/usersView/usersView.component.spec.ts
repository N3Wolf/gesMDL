import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacadoresViewComponent } from './lacadoresView.component';

describe('LacadoresViewComponent', () => {
  let component: LacadoresViewComponent;
  let fixture: ComponentFixture<LacadoresViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LacadoresViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacadoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
