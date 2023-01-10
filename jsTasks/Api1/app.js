const root = document.getElementById('root')
const url = 'https://api.agify.io/?name[]=michael&name[]=matthew&name[]=jane&name[]=emma&name[]=brad'

axios.get(url).then((resp) => {
    let x = 0
    let data = resp.data
    console.log(data) /
        data.forEach((elem) => {
            console.log(elem.name)
            console.log(elem)
            const div = document.createElement('div')
            const p = document.createElement('p')
            p.classList.add('text')
            p.textContent = `${++x}) count:${elem.count} || name: ${elem.name} || age:${elem.age}`
            div.append(p)
            root.append(div)
        });
})