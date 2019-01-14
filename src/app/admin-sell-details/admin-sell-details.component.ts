import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'bs-admin-sell-details',
  templateUrl: './admin-sell-details.component.html',
  styles: []
})
export class AdminSellDetailsComponent implements OnInit {
  @Input('sellDetalis') sellDetalis;
  constructor() { }

  ngOnInit() {
    console.log(this.sellDetalis.inventoryEntityList);
  }

}
