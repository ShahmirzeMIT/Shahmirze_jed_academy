//1

 function number(...positiveNumber){
   for(let key of positiveNumber){
	if(key<0){
		console.log(key);
	}
   }
 }
 number(12,23,-67,-43,-45,67,-87,90,-89)


 //2 
 
 function findLongestName(...arr){
 	let count;
	let arr1=[]
	for(let key of arr){
		count=key.length;
     	arr1.push(count)	
	}
	let max=Math.max(...arr1)
	console.log(max)
 }

 findLongestName('shahmirze','Ali','Muhammad','Kamil','HesenHuseyn')

 //3
 
 const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy","Lester"]; 
 function printWithIndex(){
	for (let  i= 0;  i< names.length; ++i) {
		console.log(`${i} : ${names[i]}`);
	}
 }

 printWithIndex()

 //eded ve massiv veririk ve bize netice olaraq birinic dxil etdiyimiz qeder massivden eded qaytarir
 function Count(n,...arrn){
	for (let i=0; i<n;i++) {
	console.log(arrn[i])
	}
}
 Count(2,2,3,5,6)
 //alretnativi slice metodudur
//  function Count(n=2,...arrn){
// 	if(arrn.length==0){
// 		return('arrayi niye bos saxlamisan ')
// 	}
// 	let hazir=arrn.slice(0 ,n);
// 	return arrn
//  }
//  console.log(Count(7,{as:'Shahmirze',surname:'Mammadyarli'},1,3,4,[1,3,4,5],3,4,5,7,8,9));

//  // 7
 //eded ve massiv veririk ve bize netice olaraq birinic dxil etdiyimiz qeder massivin sonundan eded qaytarir

 function lastCount(n,...arrlast){
	if(arrlast.length==0){
		return ('A Oho Niye Bos array gosterirsen ?? :<')
	}

	 for(let i=arrlast.length-1;i>n;i--){
			console.log(arrlast[i])
	 }
 }
 lastCount(5,22,5,6,7,8,9,0)

 //8
