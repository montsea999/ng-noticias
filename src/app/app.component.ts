import { Component, Input } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private _noticiaService: NoticiaService){}

title = 'Tus-noticias-en-tiempo-real';
titulo = "Tus Noticias en tiempo real";

listadoNoticias: any[]= []

loadNoticias = false;

h(j:any):void{
//console.log("soy papi");
//console.log({j});
this.loadNoticias = true;
this.listadoNoticias = [];

setTimeout(() => {
  this._noticiaService.getNoticias(j).subscribe(data=>{
    //console.log(j);
    console.log(data);
    this.listadoNoticias = data.articles;
    this.loadNoticias = false;
  }, error=>{
    console.log(error);
    this.loadNoticias = false;
  })
}, 1500);
}
}

//En el archivo app.component.html se reciben los datos que envio por output el componente FormularioComponent
//que activa el metodo h() que recibe como parametro el objeto SELECCION del formulario del componente FormularioComponent
//y hace la peticion http GET a la api
// Dentro de la funcion h, setTimeout() es la que se suscribe al observable que devuelve el metodo getNoticias()
//del servicio tras 1.5 segundos de espera para que pueda mostrar el spinner

