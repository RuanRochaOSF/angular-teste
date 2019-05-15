import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';

@Component({
  selector: "app-comprados",
  templateUrl: "./comprados.component.html",
  styleUrls: ["./comprados.component.scss"]
})
export class CompradosComponent implements OnInit {
  todosComprados: Array<any> = [];
  compradosVisiveis: Array<any> = [];
  favSubs: Subscription;
  compSubs: Subscription;
  indiceIni: number;
  indiceFin: number;
  constructor(private pubsub: PubSubService) {}

  ngOnInit() {
    this.indiceIni = 0;
    this.todosComprados.length < 4
      ? (this.indiceFin = this.todosComprados.length)
      : (this.indiceFin = 4);
    this.favSubs = this.pubsub.$sub("favoritar").subscribe(res => {
      if (this.buscarProd(res) != -1) {
        this.todosComprados[this.buscarProd(res)] = res;
      }
      this.mostrar_cards();
    });
    this.favSubs = this.pubsub.$sub("comprar").subscribe(res => {
      this.todosComprados.push(res);
      this.todosComprados.length < 4
        ? (this.indiceFin = this.todosComprados.length)
        : (this.indiceFin = 4);
      this.mostrar_cards();
    });
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

  buscarProd(obj:any):number{
    for (let index = 0; index < this.todosComprados.length; index++) {
      if (this.todosComprados[index].id == obj.id) {
        return index;
      }
    }
    return -1;
  }
}
