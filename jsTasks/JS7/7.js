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

let date=new Date()
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

//3 
let week=date.getDay()
let weekName={
	0:'Sunday',
	1:'Monday',
	2:'Tuesday',
	3:'Wensday',
	4:'Tuersday',
	5:'Friday',
	6:'Saturday'
}

for (let key in weekName){
	if(week==key){
		console.log(weekName[key])
	}
}
