import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  objeto: any;
  comprado: boolean;
  favoritado: boolean;
  buttonFavCont: string = "Favoritar";
  buttonCompCont: string = "Comprar";

  constructor() {}

  ngOnInit() {}
}
