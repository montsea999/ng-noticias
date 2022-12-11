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
