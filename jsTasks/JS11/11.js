
/// closest
// verdiyimi z elementin hansi elemente aid oldugunu tapir ve o elemnti qaytariri
// let nese=document.querySelector('.nese')
// console.log(nese.closest('.bu'))
// console.log(nese.closest('.a1'))

let entry= document.getElementById('entry')

let result=document.getElementById('result')
let circle=document.querySelector('.circle')

result.onclick=function(){
	let val=entry.value
	if(val!=''){
	console.log(val)
	circle.style.margin='40px'
	circle.style.width=`${val}px`
	circle.style.height=`${val}px`
	circle.style.border="1px solid black"
	circle.style.borderRadius="50%"
	let circlelength=(val/2)*2*3 	
	let circlesquare=(val/2)**2 *3
	console.log(circlelength)
	console.log(circlesquare)
	}

}