const root = document.getElementById('root')
    // const mypromie = new Promise((onresolve, onreject) => {
    //         let people = [{
    //                 name: "Sako",
    //                 age: 20,
    //                 job: "dev"
    //             },
    //             {
    //                 name: "Eli",
    //                 age: 7,
    //                 job: "cildhood"
    //             },
    //             {
    //                 name: "Paho",
    //                 age: 40,
    //                 job: "Cyber S"
    //             },
    //             {
    //                 name: "Male",
    //                 age: "♾",
    //                 job: "👷‍♀️"
    //             },

//         ]
//         setTimeout(() => {
//             onreject("sehv bas verdi ")
//         }, 200)
//         setTimeout(() => {
//             onresolve(people)
//         }, 100)

//     })
// getData()
// async function getData() {
//     const value = await mypromie
//     console.log(value)
// }
// mypromie.then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
//     console.log("error bas verdi")
// })
// const url = "https://www.swapi.tech/api/people/3"
// axios.get(url).then((response) => {
//         console.log(response)
//     }).catch((err) => {
//         console.log(err)
//         console.log('error bas verdi')
//     })
// getData()
// async function getData() {
//     const url = "https://www.swapi.tech/api/planets"
//     const { data } = await axios.get(url)
//     console.log(data.results)
// }

//--------------------localstorage---------------------------
const btn = document.getElementById('btn')
if (!localStorage.getItem('name')) {
    localStorage.setItem('name', prompt('adiniz daxil edin'))
}
btn.addEventListener('click', () => {
    localStorage.removeItem('name')
})
console.log(localStorage.getItem("name"))