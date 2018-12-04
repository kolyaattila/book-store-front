export class Message{
    id:Number;
    name:String;
    email:String;
    message:String;
    phone:String;
    date:Date;
    read:boolean;

    constructor(
        id:Number,
        name:String,
        email:String,
        message:String,
        phone:String,
        date:Date,
        read:boolean
    ){
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.message=message;
        this.email=email;
        this.date=date;
        this.read=read;
    }
}