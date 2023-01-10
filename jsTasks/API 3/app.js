const root = document.getElementById('root')



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

    //     } catch (error) {
    //         console.log(error)
    //         console.log("error happen")
    //     }

    try {
        const url = 'https://www.swapi.tech/api/people/1'
        const data = await axois.get(url)
        console.log
    } catch (error) {
        console.log(error)
        console.log('error bas verdi')
    }
}