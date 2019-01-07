import { Book } from "./Book";

export class BookCart{
    book:Book;
    cantitate:number;

    constructor(book:Book,cantitate:number){
        this.book=book;
        this.cantitate=cantitate;
    }

}