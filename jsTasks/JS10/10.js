
const gray=document.getElementById('gray')
const red=document.getElementById('red')
const blue=document.getElementById('blue')
const yellow=document.getElementById('yellow')
gray.onclick=()=>{
    document.body.style.background='gray'
}
red.onclick=()=>{
    document.body.style.background='#ff1a1a'
}
blue.onclick=()=>{
    document.body.style.background='#33ccff'
}
yellow.onclick=()=>{
    document.body.style.background='#ffff4d'
}



let simple,check 
simple=+prompt('sade olub olmadigini yoxlayacam')
check=true
if (simple === 1) {
	alert("1 is neither prime nor composite number.");
 }
 
else if (simple > 1) {
	for (let i = 2; i < simple; i++) {
	    if (simple % i == 0) {
		   check = false;
		   break;
	    }
	}
 
	if (check) {
	   alert(`${simple} is a prime number`);
	} else {
	    alert(`${simple} is a not prime number`);
	}
 }