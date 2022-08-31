import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent implements OnInit {

  listaCurso: string[] = ['typeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  habilitar:boolean = true;
  textosBoton:string[] = ['Ocultar','Mostrar'];

  constructor() { }

  ngOnInit(): void {
  }

  switchHabilitar() {
    this.habilitar= !this.habilitar;
  }

}
