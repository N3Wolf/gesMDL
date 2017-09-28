import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederacaoAddComponent } from './federacao-add.component';

describe('FederacaoAddComponent', () => {
  let component: FederacaoAddComponent;
  let fixture: ComponentFixture<FederacaoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederacaoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederacaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
