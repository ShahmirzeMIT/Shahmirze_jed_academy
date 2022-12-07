const container = document.querySelector('.container')
const user = document.querySelector('.user')
const computer = document.querySelector('.computer')
    //rengler
const color = ['red', 'gray', 'aqua', 'lime', 'orange']



// special card
const digitCount = [1, 2, 3, 4, 5]
let arr = []
count = 0
    // for (let i = 0; i < 25; i++) {
    //     for (let i = 0; i < 5; i++) {
    //         container.innerHTML += "  " + digitCount[i]
    //         count++
    //         console.log(digitCount[i])
    //         console.log(color[i])
    //     }


// }
console.log(count)
    //special card
    // const specialCard = [+4, 'block', +4, function chageColor() {}]
let x = []

for (let i = 0; i < 5; i++) {

    // burda rengleri random seklde fisher_yates alqoritmi ile edirem
    for (let i = 0; i < color.length; i++) {
        const j = Math.floor(Math.random() * color.length)
        const z = color[i]
        color[i] = color[j]
        color[j] = z

    }
    for (let i = 0; i < digitCount.length; i++) {

        const j = Math.floor(Math.random() * digitCount.length)
        const z = digitCount[i]
        digitCount[i] = digitCount[j]
        digitCount[j] = z
    }
    // burda mene verilen rengleri yaziram
    for (let k = 0; k < color.length; k++) {

        const div = document.createElement('div')
        div.innerHTML = `${digitCount[k]}`
        div.style.color = 'white'
        div.style.margin = "15px"
        div.style.fontSize = '40px'
        div.style.padding = '10px'
        div.style.width = "100px"
        div.style.height = '150px'
        div.style.boxShadow = `1px 1px 60px ${color[k]} inset, 1px 1px 20px ${color[k]}`
        div.style.border = `    1px solid ${color[k]} `
        div.style.borderRadius = '10px'

        x.push(div)
        computer.append(div)
    }
}
console.log(x)
    // for (let i = 0; i < array.length; i++) {

// }