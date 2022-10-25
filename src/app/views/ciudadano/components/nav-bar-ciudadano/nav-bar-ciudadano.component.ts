import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-ciudadano',
  templateUrl: './nav-bar-ciudadano.component.html',
  styleUrls: ['./nav-bar-ciudadano.component.css']
})
export class NavBarCiudadanoComponent implements OnInit {
  active1:string="nav-link active";
  active2:string="nav-link";

  constructor() { }

  ngOnInit(): void {
  }
  tramites(){

  }
  onActive1(){
    this.active1="nav-link active";
    this.active2="nav-link";
    
  }
  onActive2(){
    this.active1="nav-link";
    this.active2="nav-link active";
  
  }

}
