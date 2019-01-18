import { Component, OnInit, Input, Output } from '@angular/core';
import { SellService } from '../sell-service.service';

@Component({
  selector: 'bs-admin-sell-details',
  templateUrl: './admin-sell-details.component.html',
  styles: []
})
export class AdminSellDetailsComponent implements OnInit {
  @Input('sellDetalis') sellDetalis;
  constructor(private selleService:SellService) { }

  ngOnInit() {
    
  }


  acceptCommand(sellId){
    this.selleService.acceptCommand(sellId).subscribe(
      data => {
        this.sellDetalis.sell.sellAccepted=true;
      },
      err => {
        console.log(err);
      })
  }

}
