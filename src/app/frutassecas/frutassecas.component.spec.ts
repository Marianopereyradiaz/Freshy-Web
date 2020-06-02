import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutassecasComponent } from './frutassecas.component';

describe('FrutassecasComponent', () => {
  let component: FrutassecasComponent;
  let fixture: ComponentFixture<FrutassecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutassecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutassecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
