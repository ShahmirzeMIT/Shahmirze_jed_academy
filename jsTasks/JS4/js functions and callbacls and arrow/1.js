// function xitabByGender(gender){
// 	return function(name){
// 	    if(gender=="K"){
// 		   console.log(`hi mister ${name}`)
// 	    }
// 	    else if(gender=="Q"){
// 		   console.log(`hi miss Pakize ${name}`)
// 	    }
// 	    else{
// 		   console.log('aaaaaa')
// 	    }
// 	}
//   }

//   let forman= xitabByGender("K")
//   forman('ali')

//2
/*let x=prompt('adinizi daxil edin')

const getName=()=> {
let ad=x
console.log(ad)
}
getName()*/

// const cem=function(ed1=0,ed2=0){
//   return ed1+ed2
// }

// let showcem=function(){
// 	let ed1=12
// 	let ed2=45
// 	let netice =cem(12,45)
// 	console.log(netice)
// }
// showcem()
// function greeting(name) {
// 	console.log(`Hello, ${name}`);
//    }

//    function processUserInput(callback) {
// 	const _name_ = prompt("Please enter your name.");
// 	callback(_name_);
//    }

//    processUserInput(greeting);\



// debugger
// const cem = function (a1=0,a2=0){
// 	return a1+a2
// }

// const showcem=function(callback){
// let netice =cem(12,34)
// callback(netice)
// }

// showcem(function(_request){
// console.log(_request)
// })

// function getNameFunctions(){
// 	let ad=prompt('adinizi daxil edin')
// 	return ad
// }


// let user1=getNameFunctions()
// let user2=getNameFunctions()
// let user3=getNameFunctions()
// console.log(`${user1} ${user2}  ${user3}`)

// function say(){
// return ('Hi My name is Shahmirze I am student')
// }

// let func=say

// document.write(func())
// console.log(func())

// function ask(questions,yes,no){
// 	if(confirm(questions)) yes()
// 	else no()
// }

function showOk() {
    alert("you agreed")
}

function showCancel() {
    alert('why choose')
}

ask("do you agree", showOk, showCancel)
debugger
let num1 = +prompt("birinci ededi daxil et")
let num2 = +prompt("ikinci ededi daxil et")
let operator = prompt('emeli daxil et')

function showConsole(something) {
    console.log(something)
}

function calc(num1, num2, operator) {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
        switch (operator) {
            case '+':
                return (num1 + num2)
                break;
            case '-':
                return (num1 - num2)
                break;
            case '*':
                return (num1 * num2)
                break;
            case '/':
                return (num1 / num2)
                break;
        }
    } else {
        console.log(':(')
    }
}

let func = calc(num1, num2, operator)
console.log(func)
alert(func)


let result = calc(num1, num2, operator)
showConsole(result)

let eded = +prompt('ededi daxil et')

function show(some) {

}

function myFunc(callback) {
    const a = [4, 5, 6]
    let element = document.querySelector('.out')
    callback(element, a) //==out(element,a)
}

function out(elem, arr) {
    elem.innerHTML = arr.join(' ')

}
myFunc(out)


function first(y) {
    console.log(1)
    y("salam", "kamil");
}

function second(a, b) {
    console.log(a + " " + b)
}

first(second)

function show(callback) {
    let name = prompt('adinizi daxil edin')
    let gender = prompt('cinsinizi daxil edin')
    callback(name, gender)
}

function check(ad, cins) {
    if (cins == "K") {
        console.log(`xos geldiniz ${ad} bey`)
    } else if (cins == "Q") {
        console.log(`xos geldiniz ${ad} xanim`)
    } else {
        console.log(`zehmet olmasa cinsinzi daxil edin`)
    }
}
show(check)

function date(callback) {
    let birthdate = +prompt('doguldunuz gunu daxil edin')
    let name = prompt('adiniz daxil edin')
    let gender = prompt('cinsizi daxil edin')
    callback(birthdate, name, gender)
}

function check(tarix, ad, cins) {
    if (tarix >= 15 && cins == "Q") {
        console.log(`Yes sizin bank accounts 2000 azn gonderildi ${ad} xanim`)
    } else if (tarix >= 15 && cins == "K") {
        console.log(`Yes sizin bank accounts 2000 azn gonderildi ${ad} bey`)
    } else if (tarix <= 15 && cins == "Q") {
        console.log(`Yes sizin bank accounts 1000 azn gonderildi ${ad} xanim`)

    } else if (tarix <= 15 && cins == "K") {
        console.log(`Yes sizin bank accounts 1000 azn gonderildi ${ad} bey`)

    }
}
date(check)

function showDisplay(callback) {
    let name = prompt('adiniz daxil edin')
    let salary = prompt('emek haqqi')
    let childeren = prompt('Usaginiz varsa Yes yoxsa No yazin')
    callback(name, salary, childeren)
}

function ipoteka(ad, gelir, childeren) {
    if (gelir < 1200 && childeren == "Yes") {
        console.log(`Tamam sizin emek haqqiniz 500azn artirilacaq`)
    } else if (gelir < 1200 && childeren == "No") {
        console.log('Tamam sizin emek haqqiniz 300azn artirilacaq')
    } else {
        console.log('sizin ememk haqqiniz artitilmayacaq')
    }
}
showDisplay(ipoteka)