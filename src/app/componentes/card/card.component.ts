import { Component, OnInit, Input, InputDecorator } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() favorito: boolean;
  @Input() comprado: boolean;
  @Input() objeto: any;

  constructor() {}

  ngOnInit() {}
}
