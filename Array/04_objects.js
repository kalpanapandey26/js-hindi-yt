// singleton

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abs"
tinderUser.name = "kalpana"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regUser = {
    email : "kalpan@12.com",
    fullname:{
        userfullname:{
            fristname:"kalpana",
            lastname: "pandey"
        }

    }
}
//console.log(regUser.fullname.userfullname.fristname);

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
const obj4 = {5:"E", 6:"F"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id : 1,
        eamil:"kalpana.com"

    },
     {
        id : 1,
        eamil:"kalpana.com"

    },
     {
        id : 1,
        eamil:"kalpana.com"

    },
]
users[1].eamil
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));





