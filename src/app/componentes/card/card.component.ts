import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  img: string = '../../../assets/AmazingSpiderMan545.jpg';
  titulo: string = 'Spider-man - Infinito';

  constructor() { }

  ngOnInit() {
  }
}
