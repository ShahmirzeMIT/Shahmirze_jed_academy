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
	for(let i=0;i<arr.length;i++){
		count=arr[i].length;
     	arr1.push(count)	
	}
	let max=Math.max(...arr1)
	console.log(max)
 }

 findLongestName('shahmirze','Ali','Muhammad','Kamil','HesenHuseyn')

 //3
 
 const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]; 
 function printWithIndex(){
	for (let  i= 0;  i< names.length; ++i) {
		console.log(`${i} : ${names[i]}`);
	}
 }

 printWithIndex()