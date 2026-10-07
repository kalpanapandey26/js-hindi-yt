const user = {
    username: "kalpana",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to home`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// // Output: kalpana, welcome to home

// user.username = "sapna"
// user.welcomeMessage()
// console.log(this);



// function chai (){
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let username = "kalpana"
//     console.log(this.username);
    
// }
// chai()


// const chai= ()=> {
//     let username = "kalpana"
//     console.log(this);
    
// }
// chai()



//arrow fuction

//() =>{}

// const addTow = (num1, num2) =>{
//     return num1+num2 //explict
// }
// console.log(addTow(3,8));


// const addTow = (num1, num2) => num1+num2

//const addTow = (num1, num2) => (num1+num2) ////implict

const addTow = (num1, num2) => ({username:"kalpana"})



console.log(addTow(3,8));

