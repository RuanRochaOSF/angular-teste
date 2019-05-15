import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { PubSubService } from "angular7-pubsub";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-teste";
  visivel: boolean = false;
  visSubs: Subscription;
  constructor(private pubsub: PubSubService) {
    this.visSubs = this.pubsub.$sub("abrirModal").subscribe(res => {
      this.visivel = true;
    });
  }
}
