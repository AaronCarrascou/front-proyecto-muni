import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'front-proyecto-muni';
  rol:string="FUNCIONARIO";
  constructor() { }

  ngOnInit(): void {
  }


}
