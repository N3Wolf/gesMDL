import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesdelacoComponent } from './clubesdelaco.component';

describe('ClubesdelacoComponent', () => {
  let component: ClubesdelacoComponent;
  let fixture: ComponentFixture<ClubesdelacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClubesdelacoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesdelacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
