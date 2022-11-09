let Calculator = {
    read(a, b) {
        //    a = +prompt("irinici ededi daxil edin")
        //     b= +prompt("ikinci ededi daxil edin")
        return a + b
    },
    sum() {
        console.log(this.x + this.y)
    },
    multiply() {
        console.log(this.x * this.y)
    },
    divide() {
        console.log(this.x / this.y)
    },
    subtract() {
        console.log(this.x - this.y)
    }
}

let x = +prompt('birinci edidi daxil et')
let y = +prompt('ikinci edidi daxil et')
Calculator.x = x
Calculator.y = y

Calculator.sum()
Calculator.multiply()
Calculator.divide()
Calculator.subtract()
console.log(Calculator.x)