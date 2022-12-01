import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router  } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-formulario',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})
export class ProdutoFormularioComponent implements OnInit {

  constructor(
    private produtoService:ProdutoService,
    private formsBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  idProduto: number = 0;
  produtoForm!: FormGroup;



  ngOnInit(): void {
  }

  IniciarFormulario(){
    this.produtoForm = this.formsBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: [0, Validators.required],
      qtdEstoque: [0, Validators.required]
    })

  }

  getProduto(){
    const idProduto = this.route.snapshot.paramMap.get('id')
  }

}
