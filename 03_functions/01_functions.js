

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("E");
    console.log("S");
    console.log("H");   

}
//sayMyName()



//function add2num(num1,num2){    ///num1,mu2 parameters
  //  console.log(num1+num2);
    
//}

function add2num(num1,num2){    ///num1,mu2 parameters
    //let result = num1+ num2
    //return result   
    //console.log("kalpana");

    return num1 + num2
     
}
//add2num(3,8)  //3,8 arguments

const result = add2num(2,8)
//console.log("result is ", result);

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username ");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("kalpana"));
// kalpana just logged in


//function addCartPrice(...num1){  ///...num1 rest and spart opetarer
function addCartPrice(val1,val2 , ...num1){
    return num1
}
//console.log(addCartPrice(200,300,800,600))

const user ={
    name : "kalpana",
    price : 999
}
function handleobject (anyonject){
    console.log(`username is ${anyonject.name} and price is ${anyonject.price}`);
    
}
handleobject(user)


const myNewAarry = [200,300,500]
function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewAarry));

console.log(returnSecondValue([200,400,500,700]));




