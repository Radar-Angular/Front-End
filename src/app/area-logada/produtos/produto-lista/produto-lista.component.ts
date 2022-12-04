import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SortingInterface } from 'src/app/shared/interface/sorting.interface';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';


@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[] = []
  produto: Produto = {} as Produto

  // Tabela dinamica

  columns: Array<keyof Produto> = ['id', 'nome', 'descricao', 'valor', 'qtdEstoque'];
  sorting: SortingInterface = {
    column: 'id',
    order: 'asc',
  };
  searchValue: string = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buscarProdutos();
    this.fetchData();
  }

  private async buscarProdutos() {
    this.produtos = await this.produtoService.getProdutos();
    console.log("aqui esta")
  }

  editarContato(idProduto: number) {
    this.router.navigate([`produtos/${idProduto}/editar`])
  }

  async excluir(produto: Produto) {
    if (confirm("Deseja mesmo excluir esse produto?"))
      await this.produtoService.deleteClienteById(produto.id)
    this.buscarProdutos()
  }

  public async addProduto() {
    this.router.navigate([`produtos/novo`])
  }


  // TABELA DINAMICA
  fetchData(): void {
    this.produtoService.getProdutosLista(this.sorting, this.searchValue).subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  isDescSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'desc';
  }
  isAscSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'asc';
  }
  sortTable(column: string): void {
    const futureSortingOrder = this.isDescSorting(column) ? 'asc' : 'desc';
    this.sorting = {
      column,
      order: futureSortingOrder,
    };
    this.fetchData();
  }
  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }

}
