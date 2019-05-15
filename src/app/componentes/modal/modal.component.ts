import { Component, OnInit, OnDestroy } from "@angular/core";
import { PubSubService } from "angular7-pubsub";
import { Subscription } from "rxjs";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {
  objeto: any = {
    src: "../../../assets/AmazingSpiderMan545.jpg",
    titulo: "Titulo Padrão",
    descricao: "bla bla bla bla",
    favorito: false,
    comprado: false
  };
  objSubs: Subscription;
  buttonFavCont: string = "Favoritar";
  buttonCompCont: string = "Comprar";

  constructor(private pubsub: PubSubService) {}

  ngOnInit() {
    this.objSubs = this.pubsub.$sub("abrirModal").subscribe(res => {
      this.objeto = res;
    });
  }

  ngOnDestroy() {}
}
