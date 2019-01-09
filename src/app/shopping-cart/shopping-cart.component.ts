import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { element } from '@angular/core/src/render3';
import { Book } from '../Book';
import { LoginService } from '../login-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory-service.service';
import { BookCart } from '../BookCart';

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls:['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart:CartService,
              private login:LoginService,
              private toastr:ToastrService,
              private router:Router,
              private inventory:InventoryService) { }
  Totalprice=0;
  Shipping=5;
  ngOnInit() {
    this.cart.books.forEach(element => {
      this.inventory.checkExistStock(element.book,element.cantitate).subscribe(data => {element.disponibil=data});
    })
    
    if(this.cart.books.length>0){
      
      this.Totalprice=0;
      this.Shipping=5;
      for(var element ; element< this.cart.books.length;element++){
        if(this.cart.books[element].disponibil==true){
          this.Totalprice=(this.cart.books[element].cantitate*this.cart.books[element].book.price)+this.Totalprice;
        }
      }
    }
    else{
      this.Totalprice=0;
      this.Shipping=0; 
    }
  }

  remove(book:Book){
    this.cart.remove(book);
    this.ngOnInit();
  }

  Comanda(){
    if(!this.login.isAuthenticated()){
      this.toastr.warning("You have to login","");
      this.router.navigate(["/login"]);
    }
    else{
      console.log(this.cart.books);
    }
  }


}
