import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  favoritos: Array<any> = [{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"},{nome:"Ruan"}];

  constructor() { }

  ngOnInit() {
  }

}
