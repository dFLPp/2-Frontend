export interface Itodo{
    id: string,
    content:string,
    status:boolean
}

export default class TodoItem implements Itodo{
    id: string;
    content: string;
    status: boolean;

    constructor(
        id: string,
        content:string,
        status:boolean
    ){
        this.id=id;
        this.content=content;
        this.status=status;
    }

    get Id():string{return this.id}
    set Id(id: string){this.id=id}

    get Content():string{return this.content}
    set Content(content: string){this.content = content}

    get Status():boolean{return this.status}
    set Status(status: boolean){this.status = status}
}