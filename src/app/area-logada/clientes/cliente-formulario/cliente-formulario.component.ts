import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';


@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    public formsBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  titulo: string = "Novo Cliente"
  public cliente: Cliente = {} as Cliente
  clienteForm!: FormGroup;

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    if (id) {
      this.atualizarCliente(id)
    }
  }

  private async atualizarCliente(id: Number) {
    this.titulo = "Alterando Cliente"
    this.cliente = await this.clienteService.getClienteById(this.cliente.id)
  }

  salvar() {
    if (this.cliente && this.cliente.id > 0) {
      this.clienteService.putCliente(this.cliente)
    }
    else {
      this.clienteService.postCliente(this.cliente)
    }
    this.router.navigate(['clientes'])
  }

}
