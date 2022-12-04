const circle = document.querySelector('.circle')
console.log(circle.setAttribute('name', 'circle1'))
    // circle.onclick = (event) => {
    //     event.target.classList.toggle('circle1')
    //         // event.target.classList.add('head1')
    //         // event.target.classList.remove('circle')
    //     console.log(event.target.classList)
    // }
    //mouseover=>uzerine getirdikde olur vereceyimiz prosesler
    //mouseout => obyektin uzerinden ayrildiqda o proses bas verecek
    //dbclick => obyekti iki defe klikledikdebas verir
    //contextmenu  => sadece olaraq sag kliklemeye bildiri
    //mousedown => Siçan düyməsini basıb saxlayanda olur
    //mouseup => sicani basib buraxdiqda .
    //mouseenter => sicani uzerine getirdikde proses bas verir
    //mouseleave => sicani obyektin uzerunden cekdikde bas verir
    //mousemove => obyektimizin ve ya window obyektinin icinde hereket etdiyimiz gosterir
    // circle.addEventListener('mouseover', event => {
    //     event.target.textContent = "Salam"
    //     event.target.style.color = "white"
    //     event.target.classList.toggle('circle1')
    // })
    // circle.addEventListener('mouseout', event => {

//     event.target.textContent = ""
//     event.target.style.color = ""
//     event.target.classList.toggle('circle1')
// })

// circle.addEventListener('contextmenu', (event) => {
//     event.target.textContent = 'sag klikledin'
//     event.target.style.color = "white"
// })
// circle.addEventListener('mousedown', (event) => {
//     event.target.style.border = "10px solid white"
// })
// circle.addEventListener('mouseup', (event) => {
//     event.target.style.border = "25px solid white"
// })

// circle.addEventListener('mouseenter', (event) => {
//     event.target.style.boxShadow = " 1px 1px 65px lime inset, 1px 1px 30px rgb(57, 223, 235)"
// })
// circle.addEventListener('mouseleave', event => {
//         event.target.style.boxShadow = ""

//     })
// circle.addEventListener('mousemove', (event) => {

//     event.target.style.color = "white"
//     event.target.style.textAlign = "center"
//     event.target.textContent = `x = ${event.x} y = ${event.y}`
// })
// const play = document.querySelector('#play')
// const pause = document.querySelector('#pause')
// const john = document.getElementById('#john')

// play.addEventListener('click', (event) => {
//     john.play()
// })
// pause.addEventListener('click', (event) => {
//     john.pause()
// })

// window.addEventListener('keydown', (event) => {
//     console.log(event)
// })
const circle1 = document.querySelector('.circle1')

let x = ''
    // window.addEventListener('keydown', (event) => {
    //     x = event.key
    //     if (x.length < 3) {
    //         circle1.textContent = circle1.textContent + event.key
    //     }
    //     if (x === "Backspace") {
    //         circle1.textContent = circle1.textContent.slice(0, circle1.textContent.length - 1)
    //     }
    //     console.log(circle1.textContent.length)
    // })

//keydown yazini yazdigimizda bas verir 
// keyup basib buraxdiqdan sonra bas verir
//keypress  ikisi bir yerde
window.addEventListener('keyup', (event) => {
    x += event.key
    if (x == "simsimacil") {
        circle1.textContent = "geldin menim agam"
        circle1.style.color = 'white'
    }
    console.log(x)


})