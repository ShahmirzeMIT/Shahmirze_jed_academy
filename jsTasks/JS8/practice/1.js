

	// esl
	// debugger
	// let arr=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

	// for(let i=0;i<arr.length;i++){
	// 	console.log(`row ${arr.indexOf(arr[i])}`)
	// 	for(let j=0;j<arr[i].length;j++){
	// 		console.log(`${arr[i][j]}`)
	// 	}
	// }

	//  Write a JavaScript program to find the sum of squares of a numeric vector

	// function square(...arr){
	// 	let sqr=0;
	//  for(let i=0;i<arr.length;i++){
	//  sqr+=Math.pow(arr[i],2)
	//  }
	//  console.log(sqr)
	// }
	// square(1,2,5,6,12,34)

	// arrayde verilen ededin kesr ve ya tam tipli oldugunu bilmek ucun javascriptde funkisya ve tam edeleri toplasin

	// function float(...arr){
	// 	let count=0;
	// 	for(let i=0;i<arr.length;i++){
	// 		if(typeof arr[i]==='number' && Math.round(arr[i])==arr[i]){
	// 			count+=arr[i]
	// 		}
	// 	}
	// 	console.log(count)
	// }
	// float(1,2.11,3,4.2,5)

	// n-inci funkisya
	// function show(...arrshow){
	// 	for (let  i= 0;  i<arrshow.length; i++) {
	// 		console.log(`Elemet ${i} = ${arrshow[i]}`)
	// 	}
	// 	arrshow.shift(1)
	// }

	// show(1,2,56,78,90)

	// arrayde tekrar olunan elementleri silir

	// function show(...arrshow){
	// 	let sort=arrshow.sort((a,b)=>a-b)
		
	// 	for (let i = 0; i < arrshow.length; i++) {
	// 		if(arrshow[i]==arrshow[i+1]){
	// 			sort.splice(i,1)
	// 		}
	// 	}
	// 	console.log(sort)	
	// }
	// show(1,2,56,78,90,1,3,56)
	//join

	//
	// Write a JavaScript program to find the most frequent item of an array.
	// Sample array: let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
	// Sample Output: a ( 5 times )

	//alternative
	// function choose(...Arr){
	// 	let count=0;
	// 	let items;
	// 	for (let  i= 0;  i< Arr.length; i++) {
	// 	if( typeof Arr[i] == "string"){
	// 		count++
	// 		items=Arr[i]
	// 	}	
	// 	}
	// 	console.log(`${items} count: ${count}`)	
	//  }
	// let m = 0;
	//   choose(3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3)
	// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
	// let item;
	// for (let i=0; i<arr1.length; i++)
	// let mf = 1;
	// {
	// 	for (let j=i; j<arr1.length; j++)
	// 	{
	// 			if (arr1[i] == arr1[j])
	// 			m++;
	// 			if (mf<m)
	// 			{
	// 			mf=m; 
	// 			item = arr1[i];
	// 			}
	// 	}
	// 	m=0;
	// }
	// console.log(item+" ( " +mf +" times ) ") ;
