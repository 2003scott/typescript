console.log("hola mundo")

// types

var myString: string = "Hello work"
myString = 22 + ""
myString.split("")

var myNumber : number = 22
var myBool : boolean = true || false 

var myVar:any = "hello"
myVar = false


//Strings

document.write(myNumber.toString())

//Arrays

var stringArray:string[]= ["","",""]
var nomberArray:number[] = [1,2,3]
var booleanArray:boolean[] = [true,false]
var anyArray:any[] = [1,2,true,"hello",[],{}]

// tuplas

var strNumTupl:[string,number]
strNumTupl = ["hello",22]
strNumTupl = ["word",245]

// void , undefined, null

// let myVoid: void =  undefined
// let myNull: null = null
// let myUndefined:undefined = undefined

// document.write(typeof(myVoid))

// Funtions

function getSuma(num1:number, num2:number):number {
    return num1 + num2
}

console.log(getSuma(10,20))

let mysub = function (
    num1:number | string,
    num2:number | string
):number {
    if(typeof(num1) === 'string'){
        num1 = parseInt(num1)
    }
    if(typeof(num2) === 'string'){
        num2 = parseInt(num2)
    }
    return num1 + num2
}

function getName(
    firsName:string,
    lasName?: string
):string{
    if(lasName === undefined){
        return firsName
    }
    return `${firsName} ${lasName}`
}

document.write(getName("Scott","Angeles"))

function myVoidFuntion():void {
    return
}

//Interfaces
interface ITodo{
    title : string,
    text : string
}

function showTodo(todo:ITodo) {
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo:ITodo = {title : 'Eat Dinner',text : 'lorem',}

showTodo(myTodo)

document.write()


//Clases

class User {
    name : string;
    public email: string;
    protected age : number;

    constructor(name:string,email:string,age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is register`)
    }

    showMeAge(){
        return this.age;
    }

    public AgeInYears(){
        return this.age + ' years'
    }

    payInvoice(){
        console.log(`${this.name} a pago de factura`)
    }
}

var scott = new User("scott","diegoscott@gmail.com",20)

// document.write(scott.name)
console.log(scott.register())
console.log(scott.AgeInYears())

class Menber extends User{
    id:number;

    constructor(id:number,name:string,email:string,age:number){
        super(name,email,age)
        this.id = id
    }

    payInvoice(){
        super.payInvoice
    }
}

var gordon = new Menber(1,"gordon","gordon@gmail.com",20)
gordon.payInvoice()

document.write()