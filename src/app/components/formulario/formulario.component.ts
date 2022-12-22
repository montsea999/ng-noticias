import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //paso los parametros seleccionados a traves de un @Output()
  @Output() seleccion = new EventEmitter<any>();



  categorias: any[]= [
    {value:"sports", name:"Deportes"},
    {value:"science", name:"Ciencias"},
    {value:"technology", name:"Tecnología"},
    {value:"entertainment", name:"Entretenimiento"},
    {value:"health", name:"Salud"},
    {value:"general", name:"General"}
  ]

  paises: any[]= [
    {value:"us", name:"EEUU"},
    {value:"fr", name:"Francia"},
    {value:"gb", name:"Reino Unido"},
    {value:"br", name:"Brasil"},
    {value:"ar", name:"Argentina"},
    {value:"cn", name:"China"},
    {value:"ru", name:"Rusia"},
    {value:"ua", name:"Ucrania"},
    {value:"de", name:"Alemania"}

  ]

  categoriaSeleccionada:string='technology';
  paisSeleccionado:string='sp';


  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
   //console.log(this.categoriaSeleccionada);   //OK
   // console.log(this.paisSeleccionado); //OK
   // comprobado que llegan los parametros, creo un objeto con estos parametros y los igualo a los que recibo de los select a traves de los banana

   const SELECCION = {
    categoria: this.categoriaSeleccionada,
    pais:this.paisSeleccionado
   }
   //console.log(SELECCION); //OK

   //enviamos al padre el objeto
   this.seleccion.emit(SELECCION);

  }


// El metodo buscarNoticia() crea un objeto con los parametros seleccionados en el formulario
//y los envia al servicio NoticiaService
// El padre es el componente ListadoNoticiasComponent que se suscribe al @Output() seleccion y recibe el objeto con los parametros seleccionados
// en el formulario del componente FormularioComponent
//



}
