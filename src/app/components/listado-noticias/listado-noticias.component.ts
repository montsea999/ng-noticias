import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {

 @Input() listadoNoticias: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

// se recibe por @Input() el listado de noticias que se envia desde el componente padre app.component.ts

}
