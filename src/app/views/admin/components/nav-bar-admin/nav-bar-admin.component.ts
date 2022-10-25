import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {
  active1:string="nav-link active";
  active2:string="nav-link";
  active3:string="nav-link";
  constructor() { }

  ngOnInit(): void {
  }

  onActive1(){
    this.active1="nav-link active";
    this.active2="nav-link";
    this.active3="nav-link";
  }
  onActive2(){
    this.active1="nav-link";
    this.active2="nav-link active";
    this.active3="nav-link";
  }
  onActive3(){
    this.active1="nav-link";
    this.active2="nav-link";
    this.active3="nav-link active";
  }

}
