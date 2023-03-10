//1 deep clone diffrent way
const  car={
	marka:"Tesla",
	il:"2020",
	mator:"7.5",
	km:"1000km"
}

let root=document.getElementById("root")
// let Tesla={}

// for (const key in car) {
// 		Tesla[key] = car[key];
// }
// console.log(Tesla)

//2 deep clone
// let Tesla=Object.assign({},car)

//3 
// let Tesla={...car}
// console.log(Tesla)

// Construtction Function
// function CreateUser(obj,name,age,job){
// obj.name=name
// obj.job=job
// obj.age=age
// }

// const Sako={}
// CreateUser(Sako,"Sako",20,"dev")
// console.log(Sako)

// function CreateUser(name,age,job){
// 	this.name=name
// 	this.job=job
// 	this.age=age
// }
	
// 	const Sako=new CreateUser("Sako",20,"dev")
// 	const Cako=new CreateUser("Cako",16,"businessman")
// 	console.log(Cako)

// let lookFor=prompt("Daxil edin")

// let text="While Sako was Going The way he saw my friend and said his we will rock on"
// root.textContent=text
// let find=text.toLocaleLowerCase().replace(lookFor,"⭕")
// root.textContent=find
// let arr=[1,2,4,"ds","dskfm","f"]
// arr.push("salam")
// console.log(arr)
// let img=document.getElementById("img")
let btn=document.getElementById("btn")
// console.log(img.src,img.alt)
// btn.addEventListener("click",()=>{
// 		img.setAttribute("src",'download.jpg')
// })

// console.log(img.getAttribute('src'))


// btn.addEventListener('click',(e)=>{
// let div=document.createElement("div")
// div.classList.add("circle")
// root.append(div)

// })