// let color = ["Blue ", "Green", 1,"Red", "Orange", 2,"Violet",3, "Indigo", "Yellow"];

// let result1=color.forEach(function(elem,index,arr){
//     if(typeof elem=='number'){
// 	console.log(elem)
//     }
// })
// verdiyimi sert her biri ucun odenirse onda bize true qayatrir eks halda false qaytarir
// let result=color.every((elem,index,arr)=>{
// return elem.length>4
// }) 
// verdiyimiz sert ene azi biri ucun odenirse onda bize true qaytatir 
// let result=color.some((elem,index,arr)=>{
// return elem[0]==='B'
// 	}) 
//filtr verdiymiz sert en birinic hans ucun  dogrudursa onu qaytarir
// let result=color.find((elem,index,arr)=>{
// 	if(elem.length>3){
// 		return elem
// 	}
// 		}) 

// let result=color.filter((elem,index,arr)=>{
// 	if(elem.length>3){
// 		return elem
// 	}
// }) 
// for(let i=0;i<result.length;i++){
// if(typeof result[i]=="number"){
// 	console.log(result[i])
// }
// }
// console.log(result)
// console.log(result.forEach(function(elem,index){
// 	if(typeof elem === 'number'){
// 		console.log(elem)
// 	}
// }));

	  




// debugger
// function Ordinal(n)
//  {
//  let o = ["th","st","nd","rd"],
//  x = n%100;
//  return x+(o[(x-20)%10]||o[x]||o[0]);
//  }

// for(n = 0; n < color.length; n++){
//  let ordinal = n + 1;

//  let output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

// console.log(output);
// }
//flat arrayin daxilinde basqa bir array olduqda hemin arraylari silir ve birce array orjinal saxlayir

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// console.log(arr4.flat(Infinity))

// let arr5=[1, 2,[1,2,[5],[[[7]]]]]

// let flatarr=arr5.flat(Infinity)

// function sorting(){
// 	let sortarr=flatarr.sort((a,b)=>a-b)
// 	// for(let i=0;i<sortarr.length;i++){
// 	// 	if(sortarr[i]===sortarr[i+1]){
// 	// 		sortarr.splice(i,1)
// 	// 	}
// 	// }
// 	sortarr.forEach((elem,index,ar)=>{
// 		if(ar[index]===ar[index+1]){
// 			sortarr.splice(index,1)
// 			// console.log(elem)
// 		}
// 	})
// console.log(sortarr)
// }
// sorting()
//😤
// function search(...Arr2){
// Arr2.forEach((elem,index)=>{
// 	if(elem != NaN  && typeof elem==='number'   ){
// 			console.log(elem)
// 	}
// })
// }

// search(NaN, 0, 15, false, -22, '',undefined, 47, null)


// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Gray"];
// color.filter((elem,index)=>{
// console.log(elem[0])
// })
// let sira = ["th","st","nd","rd"]
// let netice=color.forEach((elem,index)=>{
// 	if(index==0) console.log(`${index+1} ${sira[1]} choice is ${elem}`)
// 	else if(index==1) console.log(`${index+1} ${sira[2]} choice is ${elem}`)
// 	else if(index==2) console.log(`${index+1} ${sira[3]} choice is ${elem}`)
// 	else console.log(`${index+1} ${sira[0]} chice is ${elem}`)
// })
// function shuffle(arra1) {
// 	let ctr =arra1.length, temp, index;
 
// 	while (ctr>0) {
// 	    index = Math.floor(Math.random() * ctr);
// 	    ctr--;
// 	    temp = arra1[ctr];

// 	    arra1[ctr] = arra1[index];

// 	    arra1[index] = temp;
// 	    console.log(arra1[index])
// 	}
// 	return arra1;
//  }
//  let myArray = ["salam", 1, 2, 3, 4, 5, 6, 7, 8, "malas"];
//  const shuffledArray = myArray.sort((a, b) => 0.5 - Math.random());
//  console.log(shuffle(myArray));
//  console.log(shuffledArray)

//  let myqars=[1,2,3,4,5,6,7,8]

//  function qarisdir(firla){
//   for (let i = 0; i < firla.length; i++) {
// 	let temp=firla[i]
// 	console.log(temp);
// 	let rand=Math.floor(Math.random()*firla.length )
// 	firla[i]=firla[rand]
// 	firla[rand]=temp
// }
//  }

//  qarisdir(myqars)

 // fill biz arrayde butun elemenleri b=ve ya daxil etdiyimi araliqda olan arraylari 
//fill(value,start,end)
// The entries() method returns an Array Iterator object with key/value pairs:
// entrie() metodu geriye key ve value qaytarir	
// [key,value]
// [key,value]
// [key,value]
// [key,value]

// let items = [1, 2, 3, 4, 5, 7, 8, 9];

// function search(elem1,src){
// elem1.forEach((elem,index)=>{
// if(elem==src) console.log(index)
// });

// }

// search(items,5)

// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let cem=0
// array2.forEach((elem,index)=>{
//    if(!(array1[index]===undefined)){
// 	cem=elem+array1[index]
//    }
//    else{
// 	cem=elem+0
//    }
//    console.log(cem)
// })
 
// let unarr=[[1, 2, 3], [100, 2, 1, 10]]
// let flat=unarr.flat()

// function union(x){
// 	let sort=x.sort((a,b)=>a-b)
// sort.forEach((elem,index,arr)=>{
// 	if(arr[index]===arr[index+1]){
// 		arr.splice(index,1)
// 	}

// });
// console.log(sort);
// }


function	kebabToSnake(str){
  let large=str.toUpperCase()
  return large
}

console.log(kebabToSnake('ali-greenheart'))
 function SnakeToKebab(str){
	let small=str.toLowerCase()
	return small
 }
console.log( SnakeToKebab('JAVASCRIPT_IS_HELL'))


let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
let result=[]
numbers.forEach((elem,index)=>{
	if(elem<0){
		result.push(elem*-1)
	}
	else{
		result.push(elem*2)
	}
})
// for(let i=0;i<numbers.length;i++){
// 	if(numbers[i]<0){
// 		result.push(numbers[i]*-1)
// 	}
// 	else{
// 		result.push(numbers[i]*2)
// 	}
// }
console.log(result)

let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
let new1=[]
names.some((elem,index)=>{
	if(elem[0]=='A'){
		new1.push(elem)
	}
})

console.log(new1)

// let numbers2=[1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84]
// let arr={evens:0,odd:''}
// let count=0
// for(let i=0;i<numbers2.length;i++){
// 	if(numbers[i]%2==0){
// 		arr.evens=numbers[i]
// 	}
// }
// let count=0
// numbers2.reduce((evens,elem)=>{

// 	//console.log(evens,elem);
// 	if(elem%2==0){
// 		count++
// 		evens[0]=count
// 	}
// },[0,0])
// swapcase = function swapcase(str) {
// 	return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
// 	    return chr ? match.toUpperCase() : match.toLowerCase();
// 	});
//  }
// console.log(swapcase('AaBbc'));


	// for (const val of library) {
	// 	console.log(val.readingStatus)
	// }


function show(callback){

	let library = [ 
		{
		    author: 'Bill Gates',
		    title: 'The Road Ahead',
		    readingStatus: true
		 },
		{
		    author: 'Steve Jobs',
		    title: 'Walter Isaacson',
		    readingStatus: true
		},
		{
		    author: 'Suzanne Collins',
		    title:  'Mockingjay: The Final Book of The Hunger Games', 
		    readingStatus: false
		},
		1,
		2,
		[1,2,3,4]
	];
	let lib=[]
	for (const val of library) {
		if(typeof val=='object'){
			lib.push(val)
		}
		else{
			console.log(val)
		}
	}

	callback(lib)
}

function some1(val1){
for(let i=0;i<val1.length;i++){
	console.log(val1[i])
}

}

show(some1)




