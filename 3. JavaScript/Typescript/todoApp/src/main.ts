import './style.css'
import TodoList from './beans/todoList'
import listComponent from './components/listComponent'

const form = document.getElementById("form") as HTMLFormElement;
const textINP = document.getElementById("textINP") as HTMLInputElement;
const statusINP = document.getElementById("statusINP") as HTMLInputElement;

const app = document.getElementById("app") as HTMLDivElement;
const list = TodoList.singleton;
const uiList = listComponent.singleton;

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  if(textINP.value === ""){
    console.log("must have value");
    textINP.value = "";
    statusINP.checked = false;
    return;
  }
  list.add({id:generateId(), content:textINP.value, status:statusINP.checked});
  uiList.render();
  textINP.value = "";
  statusINP.checked = false;
})

function generateId():string{
  return (Math.random()**3).toString();
}

window.addEventListener('load', ()=>{
  app.append(uiList.ul);
  list.load();
  uiList.render();
})