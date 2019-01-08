import { Book } from "./Book";

export class BookCart{
    book:Book;
    cantitate:number;
    disponibil:boolean;

    constructor(book:Book,cantitate:number,disponibil:boolean){
        this.book=book;
        this.cantitate=cantitate;
        this.disponibil=disponibil;
    }

}