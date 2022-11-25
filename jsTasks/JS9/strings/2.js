// //  function repeat(str,itr){
// // 	let nem=''
// // 	for(let i=0;i<itr;i++){
// // 		nem+=str
// // 	}
// // 	return nem;
// //  }
// //  console.log(repeat('Ha!',8));


// // function insert(text,ins,pos){
// // let metn=text.split(' ')
// // metn.splice(pos,0,ins)
// // console.log(metn.join(' '))
// // return text.slice(0,pos) +"  " +ins+text.slice(pos)
// // }
// // console.log(insert("salam deyir","javascript",1))

// // function humanize_format(n){
// // 	let str=n.toString()
// // 	console.log()
// // if(str!=undefined){
// // 	if(str[str.length-1]==1){
// // 		console.log(`${n} st`)
// // 	}
// // 	else if(str[str.length-1]==2){
// // 		console.log(`${n} nd`)
// // 	}
// // 	else if(str[str.length-1]==3){
// // 		console.log(`${n} rd`)
// // 	}
// // 	else{
// // 		console.log(`${n} th`)
// // 	}
// // }

// // }
// // humanize_format(201)
// // humanize_format(202)
// // humanize_format(204)
// // humanize_format(205)
// // humanize_format(203)
// // function longest_common_starting_substring(arr1){

// // 	a1= arr1[0], a2= arr1[arr1.length-1], L= a1.length, i= 0;
// // 	while(i< L && a1[i]=== a2[i]){
// // 		i++;
// // 	} 
// // 	return a1.slice(0, i);
// // 	}
// // 	console.log(longest_common_starting_substring(['gojndfkjdnskjnkdjs', 'gojnogle']));
// // function merge_array(...Arr){
// // let flat=Arr.flat().sort((a,b)=>a-b)
// // console.log(flat)
// // flat.map((elem,index,arr)=>{
// //   if(arr[index]==arr[index+1]){
// //    arr.splice(index,1)
// //      }
// // })

// // return flat
// // }
// // let array1 = [1, 2, 3];
// // let array2 = [2, 30, 1];
// // console.log(merge_array(array1, array2))

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"]	
// let name=color.forEach((elem,index)=>{
	
//       if(index==1){
// 		console.log(`${index}${o[1]} ${elem}`)
// 	 }
// 	 else if(index==2){
// 		console.log(`${index}${o[2]} ${elem}`)
// 	 }
// 	 else if(index==3){
// 		console.log(`${index}${o[o.length-1]} ${elem}`)
// 	 }
// 	 else{
// 		if(index==0){
// 		console.log(`${index} ${elem}`)
// 	}else{
// 		console.log(`${index}${o[0]} ${elem}`)
// 	}

		
// 	 }
// })

// function BigUser() {

// 	this.name = "John";
// 	this.age=19
   
// 	return { name: "Godzilla" };  // <-- returns this object
//    }
   
//    console.log( new BigUser() );



