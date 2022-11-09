let Calculator = {
    read(a = 0, b = 0) {
        Calculator.a = a
        Calculator.b = b
    },
    sum() {
        console.log(this.a + this.b)
    },
    multiply() {
        console.log(this.a * this.b)
    },
    divide() {
        console.log(this.a / this.b)
    },
    subtract() {
        console.log(this.a - this.b)
    }
}

let x = +prompt('birinci edidi daxil et')
let y = +prompt('ikinci edidi daxil et')
Calculator.read(x, y)
Calculator.sum()
Calculator.multiply()
Calculator.divide()
Calculator.subtract()
console.log(Calculator.a)
console.log(Calculator.b)