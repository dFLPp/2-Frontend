import {Itodo} from "./todoItem"

export interface iList{
    data:Itodo[],
    add(todo:Itodo):void,
    remove(id:string):void,
    empty():void,
    update(id:string, status:boolean):void,
    save():void,
    load():void
}

export default class TodoList implements iList {
    public static singleton = new TodoList();
    data: Itodo[];
    constructor(){
        this.data = [];
    }

    private setData(data:Itodo[]){TodoList.singleton.data=data}
    public getData():Itodo[]{return TodoList.singleton.data}

    add(todo: Itodo): void {
        TodoList.singleton.data.push(todo);
        console.log(this.getData());
        TodoList.singleton.save()
    }
    remove(id: string): void {
        let data:Itodo[] = this.getData();
        console.log("data just before deletion: " + data)
        data = data.filter(elem => elem.id !== id);
        console.log("data after deletion: " + data)
        this.setData(data);
        TodoList.singleton.save();
    }
    empty(): void {
        TodoList.singleton.data = []
    }
    update(id: string, status:boolean): void {
        let data:Itodo[] =  this.getData();
        data = data.map(elem => {
            if(elem.id === id){elem.status = status};
            return elem;
        })
        this.setData(data);
        TodoList.singleton.save();
    }
    save(): void {
        localStorage.setItem('todoList', JSON.stringify(this.getData()));
    }
    load():void{
        let data = localStorage.getItem('todoList');
        if(data) this.setData(JSON.parse(data));
    }

}