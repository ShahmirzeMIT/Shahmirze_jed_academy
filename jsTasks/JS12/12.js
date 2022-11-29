// const img=document.querySelector('#img')
// const btn=document.querySelector('button')

// console.log(img.getAttribute('src'))
// btn.onclick=()=>{
// 	img.setAttribute('src','C:\\Users\\acer\\Desktop\\JED Academy\\Shahmirze_jed_academy\\jsTasks\\JS12\\img\\download (2).jpg')
// 	img.removeAttribute('alt')
// 	console.log(img.getAttribute('src'))
// 	console.log(img.alt)
// }
// getComputedStyle(tag).nese
// btn.onclick=()=>{
// 	// btn.classList.add('active')
// 	btn.classList.toggle('active')
// }

// const newdiw=document.createElement('div')
// newdiw.innerHTML="salam aa"
// document.body.appendChild(newdiw)
// const h1=document.createElement('h1')
// h1.textContent="senede salam"
// newdiw.appendChild(h1)
//prepend verdiymizde en basa verir

const users=[
	{
	    id:1, 
	    username:"Ali",
	    img:'ali',
	    job:'developer'
	},
	{
	    id:2,
	    username:'bedbext_developer',
	    img:'bedbext_developer',
	    job:'test2',
	},
	{
	    id:3,
	    username:'duman',
	    img:'duman',
	    job:'test3',
	},
	{
	    id:4,
	    username:'js_oyrenen_shexs',
	    img:'js_oyrenen_shexs',
	    job:'test4',
	},
	{
	    id:5,
	    username:'qarli_daglar',
	    img:'qarli_daglar',
	    job:'test5',
	},
	{
	    id:6,
	    username:'qoca_cinar',
	    img:'qoca_cinar',
	    job:'test6',
	},
	{
	    id:7,
	    username:'visselka',
	    img:'visselka',
	    job:'test7',
	},
	{
	    id:8,
	    username:'novxani',
	    img:'novxani',
	    job:'test8',
	},
 ]

 const root=document.getElementById('root')

let name='img\\';
for (const val of users) {
    const div=document.createElement('div')
    root.append(div)
    const img=document.createElement('img')
    img.src=`${name}${val.img}.jpg`
    const h1=document.createElement('h1')
    h1.textContent=`${val.username}`
    const p=document.createElement('p')
    p.textContent=`${val.job}`
    div.append(img,h1,p)

}
