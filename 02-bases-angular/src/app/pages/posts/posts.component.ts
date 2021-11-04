import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  //inyectar servicio 
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    //Traer metodo que se encuenta en dataService
   this.mensajes = this.dataService.getPosts();
  }

  escuchaClick( id: number ){
    console.log('Click en : ', id)
  }

}
