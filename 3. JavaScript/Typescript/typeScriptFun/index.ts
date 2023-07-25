//basic types

//let id = 5      //javascript
let id:number = 5 //typescript

let string:string = 'bananas';
let isOpen: boolean = false; 
let nani: any = 'aaskdalssçfsdf'

let ids:number[] = [1,2,3,4]
let arr:any[] = ['asas', 1, true];

//tuple (sorted array)
let tuple:[number, string, boolean] = [1, '2', true];
let employees:[number, string][] = [
    [1, '2'],
    [3, '4']
]

//Union (one or another)
let pid:number | string = '1';
pid = 2;

enum fruits {
    Banana1,
    Banana2,
    Banana3
}

//types 
type User = {
    id: number | string,
    name: string
}
const user1:User = {
    id: '1',
    name: 'zezo'
}

//type assertion (converter um tipo para outro)
let cid: unknown | number = '123';
let cidNum = cid as number;

//functions (return and params type)

const add = (x:number, y:number):number => x+y;
console.log(add(1,2))

const msg = (message: string | number):void => console.log(message);
msg('a');
msg(1);

//interfaces (ideais para objetos)
//interfaces são como abstrações. Ex: você não vê motor + rodas + chasi + ..., você vê um carro
//por consequencia interfaces são publicas, feitas para as pessoas verem, mas só o necessário
interface UserInterface{
    readonly id: number | string, //não pode ser alterado
    name: string,
    age?: number //não é garantido que exista
}
const user2:UserInterface = {
    id: 1,
    name: 'zezo'
}

interface funcFormatter{
    (x:number, y:number):number
}
const superAdd:funcFormatter = (x, y) => x+y
//superAdd('a','b');
console.log(superAdd(1,2));


//O que o usuário/UI vê/entende
interface IPerson{
    getInfo():string
}

//classes with types
//O que as enteties do app são de verdade
class Person implements IPerson {
    private id: number
    private name: string
    
    constructor(id:number, name:string){
        this.id = id;
        this.name = name
    }

    getInfo(): string{ return `${this.name} have id: ${this.id}`}
}

const zezo = new Person(123, 'zezo');
zezo.getInfo()

class Employee extends Person{
    position:string
    constructor(id:number, name:string,position:string){
        super(id, name)
        this.position = position
    }
}

const noobie = new Employee(123,'zeza','abc');
//noobie.id = 0;
console.log(noobie.getInfo())

//generics (permite criar codigo reusável)
/*
const createArray = (items:any[]):any[] => Array().concat(items); //função reusável para criar/popular arrays
const numArray = createArray([1,2,3]);
const strArray = createArray(['a','b','c']);
*/
//como estamos criando uma nova array apartir da função não podemos dar um tipo para ela explicitamente ela vai pegar implicitamente
//o tipo do return da função, ou seja, podemos pushar uma sting dentro de numArray. Uma solução é usar generics (placeholders do C++)

const createArray = <T>(items:T[]):T[] => Array().concat(items);
const numArray = createArray<number>([1,2,3]);
const strArray = createArray<string>(['a','b','c']);
console.log(numArray)
console.log(strArray)