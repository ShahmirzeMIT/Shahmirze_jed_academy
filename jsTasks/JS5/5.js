let obj1 = {
    name: 'Shahmirze',
    age: 30,
    isAdmin: true
}
let obj2 = Object.assign({}, obj1)
    //2
delete obj1.name
console.log(obj1)
    //3
let user = {
    name: 'Fred',
    age: 17,
    zip: 'AZ111',
    job: "CMS",
    count() {
        let x = 0
        for (let key in user) {
            x++
        }
        return x
    }
}
console.log(user.count())
    // let user = {
    //     name: "John",
    //     sizes: {
    //         height: 182,
    //         width: 50
    //     }
    // };

// let clone = structuredClone(user);

// alert(user.sizes === clone.sizes); // false, different objects

// // user and clone are totally unrelated now
// user.sizes.width = 60; // change a property from one place
// alert(clone.sizes.width);