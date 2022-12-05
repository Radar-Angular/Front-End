import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-formulario',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})
export class ProdutoFormularioComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private http: HttpClient,
    private routerParams: ActivatedRoute,
  ) { }

  titulo: string = "Novo Produto"
  public produto: Produto = {} as Produto


  ngOnInit(): void {
    let id: number = this.routerParams.snapshot.params['id']
    if (id) {
      this.atualizarCliente(id)
    }
  }


  private async atualizarCliente(id: number) {
    this.titulo = "Alterando Produto"
    this.produto = await this.produtoService.getProdutoById(id)
    console.log(this.produto)
  }


  salvar() {
    if (this.produto && this.produto.id > 0) {
      this.produtoService.putProduto(this.produto)
      console.log("caiu aq no put")
    }
    else {
      this.produtoService.postProduto(this.produto)
      console.log("caiu aqui no post")
    }
    this.router.navigate(['produtos'])
  }
}
