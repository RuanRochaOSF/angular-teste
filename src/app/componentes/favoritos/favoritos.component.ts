import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';

@Component({
  selector: "app-favoritos",
  templateUrl: "./favoritos.component.html",
  styleUrls: ["./favoritos.component.scss"]
})
export class FavoritosComponent implements OnInit {
  todosFavoritos: Array<any> = [];
  favoritosVisiveis: Array<any> = [];
  favSubs: Subscription;
  desFavSubs: Subscription;
  indiceIni: number;
  indiceFin: number;
  constructor(private pubsub: PubSubService) {}

  ngOnInit() {
    this.indiceIni = 0;
    this.todosFavoritos.length < 4
      ? (this.indiceFin = this.todosFavoritos.length)
      : (this.indiceFin = 4);
    this.favSubs = this.pubsub.$sub("favoritar").subscribe(res => {
      this.todosFavoritos.push(res);
      this.todosFavoritos.length < 4
        ? (this.indiceFin = this.todosFavoritos.length)
        : (this.indiceFin = 4);
      this.mostrar_cards();
    });
    this.favSubs = this.pubsub.$sub("desfavoritar").subscribe(res => {
      if (this.buscarProd(res) != -1) {
        this.todosFavoritos.splice(this.buscarProd(res),1);
        this.todosFavoritos.length < 4
          ? (this.indiceFin = this.todosFavoritos.length)
          : (this.indiceFin = 4);
        this.mostrar_cards();
      }
    });
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

  buscarProd(obj:any):number{
    for (let index = 0; index < this.todosFavoritos.length; index++) {
      if (this.todosFavoritos[index].id == obj.id) {
        return this.todosFavoritos[index];
      }
    }
    return -1;
  }
}
