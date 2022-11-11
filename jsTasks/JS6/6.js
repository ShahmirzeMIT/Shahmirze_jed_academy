let Calculator = {
    read(a = 0, b = 0) {
        Calculator.eded1 = a
        Calculator.eded2 = b
    },
    sum() {
        console.log(this.eded1 + this.eded2)
    },
    multiply() {
        console.log(this.eded1 * this.eded2)
    },
    divide() {
        console.log(this.eded1 / this.eded2)
    },
    subtract() {
        console.log(this.eded1 - this.eded2)
    }
}

let x = +prompt('birinci edidi daxil et')
let y = +prompt('ikinci edidi daxil et')
Calculator.read(x, y)
Calculator.sum()
Calculator.multiply()
Calculator.divide()
Calculator.subtract()
console.log(Calculator.eded1)
console.log(Calculator.eded2)


function car(model,istehsalIli,sahibi){
    this.model=model
    this.istehsalIli=istehsalIli
    this.sahibi=sahibi
    this.drive=()=>{
    return(`someone ${this.model} masina qaz verir`)
    }
    this.brake =()=>{
    return(`someone ${this.model} markali masina tormoz verir`)
    }
    }
    
    let Car= new car('BMW',2020,"Shahmirze")
    console.log(Car.brake())