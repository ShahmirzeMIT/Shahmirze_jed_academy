//1
let kok=+prompt("kvadrat kokunu almaq istediyiniz ededi daxil edin")
let result1;
if(kok>=0){
	result1=`${kok}-koku ${kok**(1/2)}`
}
else{
	result1='heqiqi koku yoxdur'
}
alert(result1)
//2
let selsi=+prompt('dereceni daxil edin')
let faranheit;
faranheit=(selsi*1.8)+32
alert(`${selsi} = ${faranheit} farnheit`)

//3
let eded=+prompt('ededi daxil edin')
let result3;
if(eded>0){
	result3= `daxil etdiyiniz eded ${eded} musbetdir`
}
else if(eded==0){
	result3=`daxil etdiyiniz eded ${eded} 0-a beraberdir` 

}
else{
	result3=`daxil etdiyiniz eded ${eded} menfidir`
}
//4
let number=+prompt('secilecek ededi daxil edin')
let result4
if(number%2==0){
	result4=`daxil etdiyiniz eded ${number} cutdur`
}
else{
	result4=`daxil etdiyiniz eded ${number} tekdir`
}
//5
let one=+prompt('birinic ededi daxil edin')
let two=+prompt('ikici ededi daxil edin')
let three=+prompt('ucuncu ededi dail edin')
let large;
if(one>=two && one>=three ){
	large=one
}
else if(two>=one && two>=three){
	laege=two
}
else{
	large=three
}
alert(large)

