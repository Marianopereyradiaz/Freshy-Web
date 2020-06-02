import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanificadosComponent } from './panificados.component';

describe('PanificadosComponent', () => {
  let component: PanificadosComponent;
  let fixture: ComponentFixture<PanificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
