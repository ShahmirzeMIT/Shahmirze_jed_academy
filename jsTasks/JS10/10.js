
const gray=document.getElementById('gray')
const red=document.getElementById('red')
const blue=document.getElementById('blue')
const yellow=document.getElementById('yellow')
gray.onclick=()=>{
    document.body.style.background='gray'
}
red.onclick=()=>{
    document.body.style.background='red'
}
blue.onclick=()=>{
    document.body.style.background='blue'
}
yellow.onclick=()=>{
    document.body.style.background='yellow'
}

for (let i = 0; i < document.body.childNodes.length; i++) {
   console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
  }
