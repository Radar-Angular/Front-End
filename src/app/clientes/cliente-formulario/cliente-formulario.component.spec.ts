import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormularioComponent } from './cliente-formulario.component';

describe('ClienteFormularioComponent', () => {
  let component: ClienteFormularioComponent;
  let fixture: ComponentFixture<ClienteFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
