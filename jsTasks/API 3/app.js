const root = document.getElementById('root')

let mypromise = new Promise((resolve, reject) => {
    let backendData = {
        name: "ali ",
        age: 22
    }
    resolve(backendData)
})


getData()
async function getData() {
    // ---------------------------------Food Api ------------------------
    //     try {
    //         const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    //         let data = await axios.get(url)
    //         let mealAbout = data.data.meals[0]
    //         console.log(mealAbout)

    //         root.innerHTML += `<h2>Country: ${mealAbout.strArea}</h2>`
    //         root.innerHTML += `<h2>Choose: ${mealAbout.strCategory }</h2>`
    //         root.innerHTML += `<h2> About :${mealAbout.strInstructions}</h2>`
    //         root.innerHTML += `<h2>${mealAbout.strMeal}</h2>`
    //         root.innerHTML += `<h2>${mealAbout.strTags}</h2>`

    // } catch (error) {
    //     console.log(error)
    //     console.log("error happen")
    // }

    try {
        const url = 'https://www.swapi.tech/api/people/7'
        const { data } = await axios.get(url)
        const datas = data.result.properties
        root.innerHTML += `<h1>${datas.name}</h1>`
        root.innerHTML += `<h2>${datas.birth_year}<h2>`
        root.innerHTML += `<h3>${datas.gender}<h3>`
        root.innerHTML += `<h4>${datas.skin_color}<h4>`
        root.innerHTML += `<h5>${datas.eye_color}<h5>`
        console.log(data)
    } catch (error) {
        console.log(error)
        console.log('error bas verdi')
    }

    // try {
    //     let data = await mypromise
    //     console.log(data)
    // } catch (error) {
    //     console.log(error)
    // }
}