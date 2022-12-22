
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  paisSelecionado='';

  constructor(private http:HttpClient) { }

  //peticion http asincrona que devolvera un Observable
  getNoticias(objeto:any):Observable<any>{
    //console.log("soy el servicio");
    //console.log(objeto.categoria);
    //console.log(objeto.pais);

    const myapiKey = '*';

   const URL= 'https://newsapi.org/v2/top-headlines?country='+objeto.pais+'&category='+objeto.categoria+'&apiKey='+myapiKey;

    //retorno una peticion get a la api con los parametros dinamicos
    return this.http.get(URL);

// El metodo getNoticias() recibe como parametro un objeto que contiene la SELECCION del formulario del componente FormularioComponent
// hace la peticion http GET a la api
// y devuelve un observable que se suscribe en el metodo getNoticias() del componente ListadoNoticiasComponent




  }



}
