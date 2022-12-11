
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

    const myapiKey = 'a55b17873648473b92af7df554d91894';
    
   const URL= 'https://newsapi.org/v2/top-headlines?country='+objeto.pais+'&category='+objeto.categoria+'&apiKey='+myapiKey;
    
    //retorno una peticion get a la api con los parametros dinamicos
    return this.http.get(URL);
    





  }



}
