import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data  = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'tertiary',
      selected: true
    },
    {
      name: 'success',
      selected: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }
}
