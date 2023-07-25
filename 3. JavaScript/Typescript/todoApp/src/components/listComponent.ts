import {Itodo} from "../beans/todoItem";
import TodoList from "../beans/todoList";

export interface IlistComponent{
    ul:HTMLUListElement,
    render():void,
    clear():void
}

export default class listComponent implements IlistComponent{
    public static singleton = new listComponent();
    ul: HTMLUListElement;
    constructor(){
        this.ul = document.getElementById("todoContainer") as HTMLUListElement;
    }

    clear(): void {
        listComponent.singleton.ul.innerHTML = '';
    }

    render(): void {
        this.clear()
        let data = TodoList.singleton.getData();
        data.forEach(elem => {
            listComponent.singleton.ul.append(createTodoComponent(elem));
        })
    }
}

function createTodoComponent(elem:Itodo){
    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    input.type = "checkbox"
    input.checked = elem.status
    input.addEventListener("change", () => {
        if(input.checked === true) TodoList.singleton.update(elem.id, true);
        else TodoList.singleton.update(elem.id, false);
    })
    p.innerHTML = elem.content
    btn.innerHTML = "delete"
    btn.addEventListener('click', () => {
        console.log("you just clicked: " + elem.id)
        TodoList.singleton.remove(elem.id);
        listComponent.singleton.render();
    })

    li.classList.add("todoItem");
    li.append(input);
    li.append(p);
    li.append(btn);

    return li;
}