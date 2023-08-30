const multiplicator = (a : number,b : number, printtext:string) =>{
    console.log(printtext,a * b)
}

const parseArguments = (args):Array<number> =>{
    if (args.length ==! 4 ) throw new Error("Wrong number of arguments")

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])

    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        return [
            firstNumber,
            secondNumber
        ]
    }else {
        throw new Error("Provided values were not numbers!")
    }
}

console.log(process.argv)

const a : number = Number(process.argv[2])
const b : number = Number(process.argv[3])


multiplicator(3,4,`Multiplied ${a} and ${b} and the result is:`)