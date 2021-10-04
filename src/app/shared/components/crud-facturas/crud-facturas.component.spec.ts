import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFacturasComponent } from './crud-facturas.component';

describe('CrudFacturasComponent', () => {
  let component: CrudFacturasComponent;
  let fixture: ComponentFixture<CrudFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
