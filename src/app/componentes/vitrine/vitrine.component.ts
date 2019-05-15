import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';

@Component({
  selector: "app-vitrine",
  templateUrl: "./vitrine.component.html",
  styleUrls: ["./vitrine.component.scss"]
})
export class VitrineComponent implements OnInit {
  todosProdutos: Array<any> = [
    {
      id: "1",
      src: "../../../assets/s-l300.jpg",
      titulo: "Return of Wolverine",
      descricao: "bla bla bla bla1",
      favorito: false,
      comprado: false
    },
    {
      id: "2",
      src: "../../../assets/marvel-comics-retro-the-x-men-comic-book-cover-no-101-phoenix-storm-nightcrawler-cyclops_u-l-q1343t50.jpg",
      titulo: "X-Men",
      descricao: "bla bla bla bla2",
      favorito: false,
      comprado: false
    },
    {
      id: "3",
      src: "../../../assets/marvel-comics-retro-captain-america-comic-book-cover-no-110-with-the-hulk-and-bucky-aged_a-G-13757811-13198931.jpg",
      titulo: "Captain America",
      descricao: "bla bla bla bla3",
      favorito: false,
      comprado: false
    },
    {
      id: "4",
      src: "../../../assets/jun180798__50845.1533153273.jpg",
      titulo: "Infinity Wars",
      descricao: "bla bla bla bla4",
      favorito: false,
      comprado: false
    },
    {
      id: "5",
      src: "../../../assets/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yMjIvNTY2L29yaWdpbmFsL0JMQVAwMDFfUFVUUkkuanBn.jpg",
      titulo: "Black Panther",
      descricao: "bla bla bla bla5",
      favorito: false,
      comprado: false
    },
    {
      id: "6",
      src: "../../../assets/728701._SX360_QL80_TTD_.jpg",
      titulo: "Captain Marvel",
      descricao: "bla bla bla bla6",
      favorito: false,
      comprado: false
    },
    {
      id: "7",
      src: "../../../assets/664458._SX360_QL80_TTD_.jpg",
      titulo: "The Avengers",
      descricao: "bla bla bla bla7",
      favorito: false,
      comprado: false
    },
    {
      id: "8",
      src: "../../../assets/17_f_.jpg",
      titulo: "Avenging Spider-man",
      descricao: "bla bla bla bla8",
      favorito: false,
      comprado: false
    }
  ];
  produtosVisiveis: Array<any>;
  favSubs: Subscription;
  desFavSubs: Subscription;
  indiceIni: number;
  indiceFin: number;
  constructor(private pubsub: PubSubService) {}

  ngOnInit() {
    this.indiceIni = 0;
    this.todosProdutos.length < 4
      ? (this.indiceFin = this.todosProdutos.length)
      : (this.indiceFin = 4);
    this.favSubs = this.pubsub.$sub("favoritar").subscribe(res => {
      if (this.buscarProd(res) != -1) {
        this.todosProdutos[this.buscarProd(res)] = res;
      }
      this.mostrar_cards();
    });
    this.favSubs = this.pubsub.$sub("desfavoritar").subscribe(res => {
      if (this.buscarProd(res) != -1) {
        this.todosProdutos[this.buscarProd(res)] = res;
      }
      this.mostrar_cards();
    });
    this.mostrar_cards();
  }

  mostrar_cards() {
    const cards = this.todosProdutos.slice(this.indiceIni, this.indiceFin);
    this.produtosVisiveis = cards;
  }

  ir() {
    if (this.indiceFin === this.todosProdutos.length) {
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
    for (let index = 0; index < this.todosProdutos.length; index++) {
      if (this.todosProdutos[index].id == obj.id) {
        return index;
      }
    }
    return -1;
  }
}
