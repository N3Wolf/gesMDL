import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederacaoViewComponent } from './federacaoView.component';

describe('FederacaoViewComponent', () => {
  let component: FederacaoViewComponent;
  let fixture: ComponentFixture<FederacaoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FederacaoViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederacaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
