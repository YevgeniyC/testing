import { Component } from '@angular/core';
import { CardsService } from '../../app/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cards:any;

  constructor(public cardsService: CardsService) {
    this.getCards();
  }

  getCards() {
    this.cardsService.getData().subscribe(data => {
      this.cards = data;
    });
  }
}
