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