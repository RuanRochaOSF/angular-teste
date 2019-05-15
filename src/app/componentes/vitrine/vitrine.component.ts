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
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito1",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "2",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito2",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "3",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito3",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "4",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito4",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "5",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito5",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "6",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito6",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "7",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito7",
      descricao: "bla bla bla bla",
      favorito: false,
      comprado: false
    },
    {
      id: "8",
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito8",
      descricao: "bla bla bla bla",
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
        return this.todosProdutos[index];
      }
    }
    return -1;
  }
}
