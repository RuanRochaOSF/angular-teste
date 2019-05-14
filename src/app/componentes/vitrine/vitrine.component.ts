import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vitrine",
  templateUrl: "./vitrine.component.html",
  styleUrls: ["./vitrine.component.scss"]
})
export class VitrineComponent implements OnInit {
  todosProdutos: Array<any> = [
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito1",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito2",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito3",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito4",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito5",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito6",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito7",
      descricao: "bla bla bla bla"
    },
    {
      src: "../../../assets/AmazingSpiderMan545.jpg",
      titulo: "Spider-man - Infinito8",
      descricao: "bla bla bla bla"
    }
  ];
  produtosVisiveis: Array<any>;

  indiceIni: number;
  indiceFin: number;
  constructor() {}

  ngOnInit() {
    this.indiceIni = 0;
    this.todosProdutos.length < 4
      ? (this.indiceFin = this.todosProdutos.length)
      : (this.indiceFin = 4);
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
}
