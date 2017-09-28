import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacadoresComponent } from './lacadores.component';

describe('LacadoresComponent', () => {
  let component: LacadoresComponent;
  let fixture: ComponentFixture<LacadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
