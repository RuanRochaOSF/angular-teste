import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprados',
  templateUrl: './comprados.component.html',
  styleUrls: ['./comprados.component.scss']
})
export class CompradosComponent implements OnInit {

  comprados: Array<any> = [{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"}]

  constructor() { }

  ngOnInit() {
  }

}
