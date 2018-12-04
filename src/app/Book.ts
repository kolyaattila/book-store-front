
export class Book{
    bookId : Number;
    name: String;
    dataPublicari:Date;
    ISBN:String;
    price:Number;
    pages:Number;
    category:String;

  constructor(
    bookId : Number,
    name: String,
    dataPublicari:Date,
    ISBN:String,
    price:Number,
    pages:Number,
    category:String
  ){
    this.bookId=bookId;
    this.name=name;
    this.dataPublicari=dataPublicari;
    this.ISBN=ISBN;
    this.price=price;
    this.pages=pages;
    this.category=category;
  }

  }
  