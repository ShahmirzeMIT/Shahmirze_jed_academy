// function User(name,surname,age,location,prepared,phone){
// 	this.name=prompt("adinizi daxil edin")
// 	this.username=prompt("soyadinizi daxil edin")
// 	this.age=+prompt("yasinizi daxil edin")
// 	this.prepared=('hazirliq')
// 	this.check=function(){
// 		if(this.age>18){
// 		return this.phone=prompt('telefon nomrenizi daxil ein')
// 		}
// 		else{
// 			return('yasiniz 18 den boyuk olmalidir')
// 		}
// 	}
// }

//    let nihad=new User()
// for(let val in nihad){
// 	if(typeof nihad[val]=='function'){
// 		console.log(nihad.val())
// 	}
// 	console.log(val)
// }


	// let arr=['ali','malik','kamil','famil','cahil' ,' alim']
	// let netice=arr.some((elem)=>elem[0]=='a')
	// console.log(netice);

let num= [6,4,0, 3,-2,1,-22,789]
let nm=[]
let deyisen=0
 console.log(num.sort((a,b)=>a-b))

 for (let i = 0; i < num.length; i++) {
// //     if(num[i]<num[i+1]){
// 		nm.push(num[i])
//     } 
//     else{
// 	     nm.push(Math.max(...num))
//     }
	if(num[i]<=num[i+1]){
		nm.push(num[i])
		// console.log(num[i])
	}

}
console.log(num)
let netice=num.map((elem,index,array)=>{
	if(elem <= array[index+1]){
		console.log(elem)
		return elem
		elem=array[index+1]
	}
})
console.log(netice) 
console.log(nm)

String.prototype.sub_String = function() 
{
  let subset = [];
  for (let m = 0; m < this.length; m++) 
  {
    for (let n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dassag".sub_String());