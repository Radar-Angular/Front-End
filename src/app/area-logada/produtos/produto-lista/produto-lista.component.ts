import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

produtos: Produto[] = []

  constructor(
    private produtoService: ProdutoService,
    private router : Router,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }

 private async buscarProdutos(){
 this.produtos = await this.produtoService.getProdutos();
  }

  editarContato(idProduto: number){
    this.router.navigate([`produtos/${idProduto}/editar`])
    }

}
