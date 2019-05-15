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
    id: "",
    src: "../../../assets/AmazingSpiderMan545.jpg",
    titulo: "Titulo Padrão",
    descricao: "bla bla bla bla",
    favorito: false,
    comprado: false
  };
  objSubs: Subscription;
  buttonFavCont: string = "Favoritar";
  buttonCompCont: string = "Comprar";
  buttonFavStatus: string = "";

  constructor(private pubsub: PubSubService) {}

  ngOnInit() {
    this.objSubs = this.pubsub.$sub("abrirModal").subscribe(res => {
      this.objeto = res;
      this.feedbackFav();
    });
  }

  ngOnDestroy() {}

  fecharModal(elem){
    if(event.target == elem) this.pubsub.$pub("fecharModal", false);
  }

  favoritar(){
    if (!this.objeto.favorito) {
      this.objeto.favorito = true;
      this.pubsub.$pub("favoritar", this.objeto);
    } else {
      this.objeto.favorito = false;
      this.pubsub.$pub("desfavoritar", this.objeto);
    }
    
    this.feedbackFav();
  }

  comprar(){
    if (!this.objeto.comprado) {
      this.objeto.comprado = true;
      this.pubsub.$pub("comprar", this.objeto);
    }
  }

  feedbackFav(){
    if (!this.objeto.favorito) {
      this.buttonFavStatus = "";
      this.buttonFavCont = "Favoritar";
    } else {
      this.buttonFavStatus = "favorito";
      this.buttonFavCont = "Favorito";
    }
  }

  feedbackFavHover1(){
    if(this.objeto.favorito){
      if (this.buttonFavCont == "Favorito") {
        this.buttonFavCont = "Desfavoritar";
      }
    }
  }

  feedbackFavHover2(){
    if(this.objeto.favorito){
      if (this.buttonFavCont == "Desfavoritar") {
        this.buttonFavCont = "Favorito";
      }
    }
  }
}
