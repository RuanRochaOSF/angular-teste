import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comprados",
  templateUrl: "./comprados.component.html",
  styleUrls: ["./comprados.component.scss"]
})
export class CompradosComponent implements OnInit {
  todosComprados: Array<any> = [];
  compradosVisiveis: Array<any> = [];

  indiceIni: number;
  indiceFin: number;
  constructor() {}

  ngOnInit() {
    this.indiceIni = 0;
    this.todosComprados.length < 4
      ? (this.indiceFin = this.todosComprados.length)
      : (this.indiceFin = 4);
    this.mostrar_cards();
  }

  mostrar_cards() {
    const cards = this.todosComprados.slice(this.indiceIni, this.indiceFin);
    this.compradosVisiveis = cards;
  }

  ir() {
    if (this.indiceFin === this.todosComprados.length) {
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
