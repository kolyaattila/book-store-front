import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls:['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit() {
  }

}
