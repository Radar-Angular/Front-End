import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListaComponent } from './pedido-lista.component';

describe('PedidoListaComponent', () => {
  let component: PedidoListaComponent;
  let fixture: ComponentFixture<PedidoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
