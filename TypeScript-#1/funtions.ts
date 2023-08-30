function saludar(name:string) {
    console.log(`Hola ${name}`)
}

saludar("scott")                          

// haciendo que el any no salte como
function saludar2({name , age}) {
    console.log(`Hola ${name} , tienes ${age} años`)
}

saludar2({name : 2, age : "Scott"})    


// dandole un tipado
function saludar3({name , age}:{name : string , age : number}) {
    console.log(`Hola ${name} , tienes ${age} años`)
}

saludar3({name : "Scott", age : 2})  

function saludar4(persona :{name:string , age:number}) {
    const {name , age } = persona
    console.log(`Hola ${name} , tienes ${age} años`)
}

saludar4({name : "Scott", age : 2})  

// ******************** */
function saludar5({name , age}:{name : string , age : number}) {
    console.log(`Hola ${name} , tienes ${age} años`)
    return age
}

// *********************

function saludar6({name , age}:{name : string , age : number}) :number {
    console.log(`Hola ${name} , tienes ${age} años`)
    return age
}

// *********************

const sayHiFromFuntion = (fn: (name : string ) => void) => {
    return fn("Scott")
}

sayHiFromFuntion((name:string) => {
    console.log(`Hola ${name}`)
})

sayHiFromFuntion(() =>{
    return Math.random()
})

const sayHi = (name:string) => {
    console.log(`Hola ${name}`)
}

sayHiFromFuntion(sayHi)

