// const operations = ["multiply","add","divide"]

type Operation = "multiply" | "add" | "divide"
type Result = number


const calculator = (a:number , b:number, op:Operation):Result => {
    // if(!operations.includes(op)){
    //     console.log("this operacion is not defined")
    // }
    if (op === "multiply") {
        return a * b
    }
    if (op === "add") {
        return a + b
    }
    if (op === "divide") {

        if (b === 0 ) {
            throw new Error("cant\t dive by 0!")
        }

        return a /b
    }

    throw new Error("Operation is not definet")
}

console.log(process.argv)

console.log(calculator (1,3,"add"))
console.log(calculator (1,3,"multiply"))
console.log(calculator (1,3,"divide"))
// console.log(calculator (1,3,"aea"))  //linea 5 valida lo datos que solo pueden ingresar

