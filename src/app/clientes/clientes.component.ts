import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[]= [];
   /* = [
    {id:1, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:2, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:3, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:4, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:5, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:6, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:7, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
    {id:8, nombre:'x1', apellido:'y1', email:'x@xx.cl', createAt:'2022-09-28'},
  ]; */
  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
    /* this.clientes = this.clienteService.getClientes();*/
    this.clienteService.getClientes().subscribe(
      clientes=> this.clientes = clientes
    );
  }



}
