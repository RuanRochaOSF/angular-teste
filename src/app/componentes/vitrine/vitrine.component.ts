import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent implements OnInit {

  produtos: Array<any> = [{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"}];
  constructor() { }

  ngOnInit() {
  }

}
