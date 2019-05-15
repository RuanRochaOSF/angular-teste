import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favoritos",
  templateUrl: "./favoritos.component.html",
  styleUrls: ["./favoritos.component.scss"]
})
export class FavoritosComponent implements OnInit {
  todosFavoritos: Array<any> = [];
  favoritosVisiveis: Array<any> = [];

  indiceIni: number;
  indiceFin: number;
  constructor() {}

  ngOnInit() {
    this.indiceIni = 0;
    this.todosFavoritos.length < 4
      ? (this.indiceFin = this.todosFavoritos.length)
      : (this.indiceFin = 4);
    this.mostrar_cards();
  }

  mostrar_cards() {
    const cards = this.todosFavoritos.slice(this.indiceIni, this.indiceFin);
    this.favoritosVisiveis = cards;
  }

  ir() {
    if (this.indiceFin === this.todosFavoritos.length) {
      return;
    }
    this.indiceIni++;
    this.indiceFin++;
    this.mostrar_cards();
  }
  voltar(): void {
    if (this.indiceIni === 0) {
      return;
    }
    this.indiceIni--;
    this.indiceFin--;
    this.mostrar_cards();
  }
}
