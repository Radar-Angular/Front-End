import { TestBed } from '@angular/core/testing';

import { PedidoProdutoService } from './pedido-produto.service';

describe('PedidoProdutoService', () => {
  let service: PedidoProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
