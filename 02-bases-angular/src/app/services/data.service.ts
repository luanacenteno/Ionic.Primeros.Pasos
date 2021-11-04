import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inyectar algo con http
  constructor( private http: HttpClient) { }

  //Metodo que permite cargar informacion
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap( console.log) );
  }

}
