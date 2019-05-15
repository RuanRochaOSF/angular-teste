import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VitrineComponent } from "./componentes/vitrine/vitrine.component";
import { CompradosComponent } from "./componentes/comprados/comprados.component";
import { FavoritosComponent } from "./componentes/favoritos/favoritos.component";
import { CardComponent } from "./componentes/card/card.component";
import { ModalComponent } from "./componentes/modal/modal.component";
import { PubSubModule } from "angular7-pubsub";

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    CompradosComponent,
    FavoritosComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [BrowserModule, PubSubModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
