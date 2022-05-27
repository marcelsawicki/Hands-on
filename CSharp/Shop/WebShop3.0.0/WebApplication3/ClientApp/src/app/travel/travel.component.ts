import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'travel-data',
  templateUrl: './travel.component.html'
})
export class TravelComponent {
  public boards: Boards[];
  Router: Router

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.Router = router;
    http.get<Boards[]>(baseUrl + 'travelaccessories').subscribe(result => {
      this.boards = result;
    }, error => {
      console.error('przkierowanie' + error);
      this.Router.navigate(['/login-panel'])
    });
  }
  public buyProcess(boardId: number, boardName: string, priceEUR: number, priceUSD: number, pricePLN: number) {
    console.log("Buying begin");
    let key = 'Item ' + boardId;
    //sessionStorage.setItem(key, boardName);
    let article = { 'boardName': boardName, 'priceEUR': priceEUR, 'priceUSD': priceUSD, 'pricePLN': pricePLN};
    sessionStorage.setItem(key, JSON.stringify(article));
    console.log(boardId);
    let cartCount = document.getElementById('lblCartCount');
    let incrementNumber = parseInt(cartCount.innerText) + 1;
    cartCount.innerText = incrementNumber.toString();
  }
}

interface Boards {
  id: number;
  price: number;
  priceEUR: number;
  priceUSD: number;
  pricePLN: number;
  name: string;
}
