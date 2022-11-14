//1
// let hi="Salam bu gun hava guneslidir"
// let split=hi.split(' ')
// console.log(split)

//2
// let convert='Alion GreenHeart'
// let index=convert.indexOf(" ")
// let slice=convert.slice(0 , index+2)+'.'
// console.log(slice)

//3 

// function removeCharacterFromString(name="Alion",character){
// let replacename=name.replace(character,"")
// return replacename
// }
// console.log(removeCharacterFromString("Alion","A"))


//4

// let useremail=prompt('yaratmaq istediyiniz emaili daxil edin')
// let end=useremail.endsWith('@gmail.com')

//  if(useremail.length>=15 &&  end===true ){
// 	console.log(`black people my brothers and siters`)
//  }
//  else{
// 	console.log('AAAA sen niye bele etdin ')
//  }

//-----------------------------------------------------------------------------------------------
// 1
const Shahmirze=new Date(2004,10,12)
let diffrenc=Date.now() - Shahmirze.getTime()
let gun =diffrenc/1000/60/60/24
console.log(diffrenc)
console.log(gun)
// let day=date.getDay()

// if(day==1 && day==3 && day===5){
// 	alert(`salam bu gun derse getmelisen`)
// }
// else{
// 	alert(`aa bu gun derse getmirsen`)
// }
// 2
// let today=date
// console.log(today)

// //3 
// let week=date.getDay()
// let weekName={
// 	0:'Sunday',
// 	1:'Monday',
// 	2:'Tuesday',
// 	3:'Wensday',
// 	4:'Tuersday',
// 	5:'Friday',
// 	6:'Saturday'
// }

// for (let key in weekName){
// 	if(week==key){
// 		document.write(weekName[key]+"<br>")
// 	}
// }
// // 4
// let month=date.getMonth()
// let MonthName={
// 	0:'Yanvar',
// 	1:'Fevral',
// 	2:'Mart',
// 	3:'Aprel',
// 	4:'May',
// 	5:'Iyun',
// 	6:'Iyul',
// 	7:'Avqust',
// 	8:'Sentyabr',
// 	9:'Oktyabr',
// 	10:'Noyabr',
// 	11:'Dekabr'
// }
// for(let value in MonthName){
// 	if(month==value){
// 		document.write(MonthName[value])
// 	}
// }

// 5 
