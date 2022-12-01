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

  titulo: string = "Novo Produto"
  public produto: Produto = {} as Produto
  produtoForm!: FormGroup;



  ngOnInit(): void {
    this.IniciarFormulario();
    let id:number =this.route.snapshot.params['id']
    if(id){
      this.atualizarProduto(id)
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


  private async atualizarProduto(id: Number){
    this.titulo = "Alterando Produto"
    this.produto = await this.produtoService.getProdutoById(this.produto.id)
  }


salvar(){
  if(this.produto.id > 0){
    this.produtoService.putProduto(this.produtoForm.value)
  }
  else{
    this.produtoService.postProduto(this.produtoForm.value)
  }
  // this.router.navigate(['produtos'])
}




}
