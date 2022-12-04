const btn=document.querySelector("#btn")

// const plus=document.querySelector('.plus')
// const minus=document.querySelector('.minus')
// const zero=document.querySelector('.zero')
// const parg=document.querySelector('p')
// let i=0
// plus.addEventListener('click',(event)=>{
// parg.textContent=++i

// })

// minus.addEventListener('click',()=>{
// 	// console.log(event.target.style)
// 	parg.textContent=--i
// })
// zero.addEventListener('click',(event)=>{
// 	console.log(event.target)
// 	i=0
// 	parg.textContent=i
// })


//kicik bir background carusel


// let arr=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg']
// let img=document.createElement('img')

// btn.addEventListener('click',()=>{
// 	let rand=Math.floor(Math.random()*arr.length)
// 	img.src=`${arr[rand]}`
// 	img.title=`${arr[rand]}`
// 	document.body.append(img)
// 	console.log(arr[rand])
// })


// let array=[1,2,3,4,5,6]
// // arr.sort((a,b)=>Math.random()-0.5)
// const shuffleArray = () => {
// 		for (let i = 0; i <array.length; i++) {
// 		  const j = Math.floor(Math.random() * (i + 1));
// 		  const z = array[i];
// 		  array[i] = array[j];
// 		  array[j] = z;
// 		}
// 		console.log(array)
// }
// 	   shuffleArray(array)

const img=document.querySelector('img')
window.addEventListener('mousemove',(event)=>{

img.style.top=`${event.y}px`
img.style.left=`${event.x}px`
})
