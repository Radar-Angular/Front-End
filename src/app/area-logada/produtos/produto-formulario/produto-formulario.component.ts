import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private formsBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  idProduto: any;
  produtoForm!: FormGroup;
  public produto: Produto = {} as Produto



  ngOnInit(): void {
    this.IniciarFormulario();
    this.idProduto = this.route.snapshot.params['id']
    if (this.idProduto) {
      this.getProduto();
    }
  }

  IniciarFormulario() {
    this.produtoForm = this.formsBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: [0, Validators.required],
      qtdEstoque: [0, Validators.required]
    })

  }

  private async getProduto() {
    const idProduto = this.route.snapshot.params['id']
    await this.produtoService.getProdutoById(idProduto);
  }

  salvarProduto() {
    if (this.idProduto > 0) {
      this.produtoService.putProduto(this.produtoForm.value)
      this.router.navigate(['produtos'])
    }
    else {
      (this.produtoService.postProduto(this.produtoForm.value))
      this.router.navigate(['produtos'])
    }

  }


}
