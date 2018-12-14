import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import{AuthorServiceService} from '../author-service.service';
import{Book}from 'src/app/Book';
import{Author}from 'src/app/Author';


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
              private authorData:AuthorServiceService) { }

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


    // getBooksCategories(){
    //   console.log("this.ChangeCategory="+this.ChangeCategory+" this.ChangePrice= "+this.ChangePrice+" this.ChangeAuthor=  "+this.ChangeAuthor);
    //   //cand schimba toate cele 3 categori
    //   if(this.ChangePrice!=-1 && this.ChangeCategory!='' && this.ChangeAuthor!=-1){
    //     console.log("aici intru0");
    //     if(this.ChangePrice==0){
    //       this.authorData.getBooksByPriceAndCategory(this.ChangeAuthor,0,20,this.ChangeCategory).subscribe(data => this.books=data);
    //     }
    //     else if(this.ChangePrice ==1){
    //       this.authorData.getBooksByPriceAndCategory(this.ChangeAuthor,20,100,this.ChangeCategory).subscribe(data => this.books=data);
    //     }
    //     else if(this.ChangePrice ==2 ){
    //       this.authorData.getBooksByPriceAndCategory(this.ChangeAuthor,100,999,this.ChangeCategory).subscribe(data => this.books=data);
    //     }
    //     console.log(this.books);
    //     return 0;
    //   }
    //   //cand schimba doar 2 categori de selectie  a cartiilor 
    //   else if(this.ChangePrice!=-1 && this.ChangeCategory!=''){
    //     console.log("aici intru1");
    //     if(this.ChangePrice==0){
    //       this.bookData.getBooksByCategoryAndPrice(this.ChangeCategory,0,20).subscribe(data => this.books=data);
    //      }
    //      else if(this.ChangePrice ==1){
    //       this.bookData.getBooksByCategoryAndPrice(this.ChangeCategory,20,100).subscribe(data => this.books=data);
    //      }
    //      else if(this.ChangePrice ==2 ){
    //       this.bookData.getBooksByCategoryAndPrice(this.ChangeCategory,100,999).subscribe(data => this.books=data);
    //      }
        
    //     return 0;
    //   }
    //   //cand schimba doar 2 categori de selectie  a cartiilor done !!!
    //   else if(this.ChangeCategory!='' && this.ChangeAuthor!=-1){
    //     console.log("aici intru2");
    //    this.authorData.getBooksByCategory(this.ChangeAuthor,this.ChangeCategory).subscribe(data => this.books=data);
    //     return 0;
    //   }
    //   //cand schimba doar 2 categori de selectie  a cartiilor done!!!!
    //   else if(this.ChangePrice!=-1 && this.ChangeAuthor!=-1){
    //     console.log("aici intru3  ");
    //       if(this.ChangePrice==0)
    //         this.authorData.getBooksByPrice(this.ChangeAuthor,0,20).subscribe(data => this.books=data);
      
    //       if(this.ChangePrice==1)
    //         this.authorData.getBooksByPrice(this.ChangeAuthor,20,100).subscribe(data => this.books=data);

    //       if(this.ChangePrice==2)
    //         this.authorData.getBooksByPrice(this.ChangeAuthor,100,999).subscribe(data => this.books=data);

    //     return 0;
    //   }
    //   //doar pt o categoie de selectie a cartilor done !!!!!
    //   else if(this.ChangePrice!=-1){
    //     console.log("aici intru4");
    //     if(this.ChangePrice==0){
    //       this.bookData.getBooksPriceBetween(0,20).subscribe(data => this.books=data);
    //      }
    //      else if(this.ChangePrice ==1){
    //        this.bookData.getBooksPriceBetween(20,100).subscribe(data => this.books=data);
    //      }
    //      else if(this.ChangePrice ==2 ){
    //        this.bookData.getBooksMinPrice(100).subscribe(data => this.books=data);
    //      }
    //      return 0;
    //   }
    //   //doar pt o categoie de selectie a cartilor done !!!
    //   else if(this.ChangeCategory!=''){
    //     console.log("aici intru5");
    //     this.bookData.getBooksByCategory(this.ChangeCategory).subscribe(data => this.books=data);
    //     return 0;
    //   }
    //   //doar pt o categoie de selectie a cartilor done !!!!
    //   else if(this.ChangeAuthor!=-1){
    //     console.log("aici intru6");
    //     this.authorData.getBooks(this.ChangeAuthor).subscribe(data => this.books=data);
    //     return 0;
    //   }
    // }

}

function sortBookByName(book1:Book,book2:Book){
  if(book1.name > book2.name)
    return 1;
  else if( book1.name === book2.name)
    return 0;
  else
    return -1;
}