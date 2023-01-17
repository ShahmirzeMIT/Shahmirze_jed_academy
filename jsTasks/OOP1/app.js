let arr = [1, 3, 5, 6, 8, 4, 1, 3, 5]

Array.prototype.removeDuplicates = function() {
    return this.filter((elem, index) => {
        if (this.indexOf(elem) === index) {
            return elem
        }
    })
}
console.log(arr.removeDuplicates())
let mix = [null, 12, undefined, NaN, false, 1214, 435, 655, "", 0]

Array.prototype.removeFalsies = function() {
    return this.filter((elem, index) => {
        if (!(elem == null || elem == undefined || elem == NaN || elem == 0 || elem == "" || elem == 0)) {
            return elem
        }
    })
}

Array.prototype.clear = function() {
    return this.length = 0
}



let human = {
    name: "Sako",
    age: 19,
    job: "dev",
    willing: 'american life'
}
Object.prototype.objLength = function() {
    return Object.keys(this).length
}


Object.prototype.firstProperty = function() {
    return Object.values(this)[0]
}


Object.prototype.lastProperty = function() {
    return Object.values(this)[this.objLength() - 1]
}
let num = 127
Number.prototype.isPrime = function() {
    return this % 2 == 0
}
let str = "a12li372343sbgvsade32vrwgevrg3rweve3rwr32"
String.prototype.toCapitalize = function() {
    return this[0].toUpperCase() + this.slice(1, this.length)
}

String.prototype.removeWhiteSpaces = function() {
    return this.trim()
}

String.prototype.filterDigits = function() {
    let arr = []
    let num
    for (let i = 0; i < this.length; i++) {
        num = this.replace(/\D/g, '')
    }
    arr.push(num.split(''))
    return arr
}

class Vehicle {
    constructor(fuel, wheelCount, landOrAir) {
        this.fuel = fuel
        this.wheelCount = wheelCount
        this.landOrAir = landOrAir
    }
}

class Car extends Vehicle {
    constructor(model, country, fuel, wheelCount, landOrAir) {
        super(fuel, wheelCount, landOrAir)
        this.model = model
        this.country = country
    }
}
let cars = new Car('Mercedes', "Germany", "Benzin", "4", "Land")
console.log(cars.fuel, cars.country, )



class Plane extends Vehicle {
    constructor(model, country, fuel, wheelCount, landOrAir) {
        super(fuel, wheelCount, landOrAir)
        this.model = model
        this.country = country
    }
}
let Airbus = new Plane('Airbus A300', 'Germany', 'Benzin', '3', 'Air')
console.log(Airbus.model)