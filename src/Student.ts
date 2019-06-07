import {Person} from "./Person";

export class Student implements Person{
    title:string;
    constructor(public firstName:string, public lastName:string)
    {
        this.title = "Student";
    }
    getName():string{
        return this.firstName+" "+this.lastName;
    }
    getTitle():string{
        return this.title;
    }
}