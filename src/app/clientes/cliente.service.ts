import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService {

  private urlEndpoint: string= "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndpoint).pipe(
      map( response => response as Cliente[] )
    );
  }
}
