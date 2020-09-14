import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../services/card-service.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {
  public cardsMyData: any;
  public crdSearch: any = '';
  constructor(private cardService: CardServiceService) { }

  ngOnInit(): void {
    this.getMyCards();
  }

  getMyCards(): void{
    this.cardService.getMyCards().subscribe(
      data => {this.cardsMyData = data; },
      err => console.log(err),
      () => console.log('My cards data loaded')
    );
  }

}
