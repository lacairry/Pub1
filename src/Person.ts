export interface Person{
    firstName:string,
    lastName:string,
    title:string,
    getName():string;
    getTitle():string;
}

class Professor implements Person{
    title:string;
    constructor(public firstName:string, public lastName:string)
    {
        this.title = "Professor";
    }
    getName():string{
        return this.firstName+" "+this.lastName;
    }
    getTitle():string{
        return this.title;
    }
}

export function getProf(firstName:string, lastName:string):Person{
    return new Professor(firstName, lastName);
}

export function getPerson():string{
    return "No Name";
}