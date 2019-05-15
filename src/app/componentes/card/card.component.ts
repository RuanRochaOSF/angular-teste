import { Component, OnInit, Input } from "@angular/core";
import { PubSubService } from "angular7-pubsub";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() objeto: any;

  constructor(private pubsub: PubSubService) {}

  ngOnInit() {}

  abrirModal() {
    this.pubsub.$pub("abrirModal", this.objeto);
  }
}
