import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasverdurasComponent } from './frutasverduras.component';

describe('FrutasverdurasComponent', () => {
  let component: FrutasverdurasComponent;
  let fixture: ComponentFixture<FrutasverdurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasverdurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasverdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
