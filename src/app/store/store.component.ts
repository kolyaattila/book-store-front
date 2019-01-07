import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import{AuthorServiceService} from '../author-service.service';
import{Book}from 'src/app/Book';
import{Author}from 'src/app/Author';
import{CartService}from 'src/app/cart-service.service'

@Component({
  selector: 'bs-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {

  books:Book[];
  visibleBooks:Book[]=[];
  authors:Array<Author>;
  categories:Array<String>;
  filterBy={'changePrice': -1,'changeCategory':'','changeAuthor': -1}


  constructor(private bookData:BookServiceService,
              private authorData:AuthorServiceService,
              private cart:CartService) { }

  ngOnInit() {
    
    this.bookData.getBooks()
    .subscribe(data => {this.books = data;this.visibleBooks=data;},
              err => console.log('uite ce am prins',err) 
      );
    this.authorData.getAuthors().subscribe(data => this.authors = data);
    this.bookData.getCategories().subscribe(data => this.categories=data);
    
  }

  onChangeAuthor(id){
    this.filterBy.changeAuthor=id;
    this.filterBooks();
  
  }

  onChangePrice(value){
    this.filterBy.changePrice=value;
    this.filterBooks();
   
  }

  onChangeCategory(name:string){
    this.filterBy.changeCategory=name;
    this.filterBooks();
    
  }

  onChangeSortedBy(category:string){
    category === 'name' ? this.visibleBooks.sort(sortBookByName) : this.visibleBooks.sort();
  }


  filterBooks(){
    if(this.books){
      if(this.filterBy.changePrice!=-1 && this.filterBy.changeCategory!='' && this.filterBy.changeAuthor!=-1){
        this.authorData.getBooks(this.filterBy.changeAuthor).subscribe(data => {
          this.visibleBooks = data.filter( book => {
            return book.category === this.filterBy.changeCategory &&
                                     this.getPriceIfBetween(book.price,this.filterBy.changePrice);
          });
        });
      }
      else if(this.filterBy.changePrice!=-1 && this.filterBy.changeCategory!=''){
        this.visibleBooks = this.books.filter( book => {
          return book.category === this.filterBy.changeCategory &&
                                   this.getPriceIfBetween(book.price,this.filterBy.changePrice);
        });
      }
      else if(this.filterBy.changeCategory!='' && this.filterBy.changeAuthor!=-1){
        this.authorData.getBooks(this.filterBy.changeAuthor).subscribe(data => {
          this.visibleBooks = data.filter( book => {
            return book.category === this.filterBy.changeCategory;
          });
        });
      }
      else if(this.filterBy.changePrice!=-1 && this.filterBy.changeAuthor!=-1){
        this.authorData.getBooks(this.filterBy.changeAuthor).subscribe(data => {
          this.visibleBooks = data.filter( book => {
            return this.getPriceIfBetween(book.price,this.filterBy.changePrice);
          });
        });
      }
      else if(this.filterBy.changePrice!=-1){
        this.visibleBooks = this.books.filter( book => {
          return this.getPriceIfBetween(book.price,this.filterBy.changePrice);
        });
      }
      else if(this.filterBy.changeCategory!=''){
        this.visibleBooks = this.books.filter( book => {
          return book.category === this.filterBy.changeCategory;
        });
      }
      else if(this.filterBy.changeAuthor!=-1){
        this.authorData.getBooks(this.filterBy.changeAuthor).subscribe(data => this.visibleBooks=data);
      }
    }
  }

  getPriceIfBetween(price:Number,code:number):boolean{
    if(code==0){
      return price <= 20 ? true : false;
    }
    else if(code ==1){
      return price >= 20 && price <=100 ? true : false;
    }
    else if(code ==2 ){
      return price >= 100 ? true : false;
    }
    return false;
  }

  
}

function sortBookByName(book1:Book,book2:Book){
  if(book1.name > book2.name)
    return 1;
  else if( book1.name === book2.name)
    return 0;
  else
    return -1;
}