// const container = document.querySelector('.container')
// const computer = document.querySelector('.computer')
//     //rengler
// const color = ['red', 'gray', 'aqua', 'lime', 'orange']
//     // special card
// const digitCount = [1, 2, 3, 4, 5]
//     //special card
// const specialCard = [+4, 'block', +4, function chageColor() {}]

// // ededleri qarisdiri ve bize random br array qaytarir
// for (let i = 0; i < digitCount.length; i++) {
//     const j = Math.floor(Math.random() * i);
//     const z = digitCount[i];
//     digitCount[i] = digitCount[j];
//     digitCount[j] = z;
// }
// console.log(digitCount)
//     // rengleri bize random sekilde qaytarir
// for (let i = 0; i < color.length; i++) {
//     const j = Math.floor(Math.random() * i)
//     const z = color[i]
//     color[i] = color[j]
//     color[j] = z
// }

// // container classini icersinde elementler yaradir
// for (let i = 0; i < color.length; i++) {
//     const div = document.createElement('div')
//     div.innerHTML = `${digitCount[i]}`
//     div.style.color = 'white'
//     div.style.margin = "15px"
//     div.style.fontSize = '40px'
//     div.style.paddingLeft = '10px'
//     div.style.width = "100px"
//     div.style.height = '150px'
//     div.style.boxShadow = `1px 1px 60px ${color[i]} inset, 1px 1px 15px ${color[i]}`
//     div.style.border = ' 1px solid lime'
//     div.style.borderRadius = '10px'
//     container.append(div)

// }
// // burda komputer ucun  ikinci defe mene yeni ede vermsi ucun bunu tekrarlayiram 
// for (let i = 0; i < digitCount.length; i++) {
//     const j = Math.floor(Math.random() * i);
//     const z = digitCount[i];
//     digitCount[i] = digitCount[j];
//     digitCount[j] = z;
// }

// //burda komputer ucun lazim  cixacaq regleri cixardiram
// for (let i = 0; i < color.length; i++) {
//     const j = Math.floor(Math.random() * i)
//     const z = color[i]
//     color[i] = color[j]
//     color[j] = z
// }
// // 
// for (let i = 0; i < color.length; i++) {
//     const div = document.createElement('div')
//     div.innerHTML = `${digitCount[i]}`
//     div.style.color = 'white'
//     div.style.margin = "15px"
//     div.style.fontSize = '40px'
//     div.style.paddingLeft = '10px'
//     div.style.width = "100px"
//     div.style.height = '150px'
//     div.style.boxShadow = `1px 1px 60px ${color[i]} inset, 1px 1px 15px ${color[i]}`
//     div.style.border = ' 1px solid lime'
//     div.style.borderRadius = '10px'
//     computer.append(div)

// }