import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesdelacoViewComponent } from './clubesdelaco-view.component';

describe('ClubesdelacoViewComponent', () => {
  let component: ClubesdelacoViewComponent;
  let fixture: ComponentFixture<ClubesdelacoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubesdelacoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesdelacoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
