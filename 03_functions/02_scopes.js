// //let a = 10
// //const b = 20
// //var c = 30
// //var c =300


// let a = 300
// if(true) {
//     let a = 10
//     const b = 20
//     //var c = 30
//     console.log("Inner:",a);

// }




// console.log(a);
// //console.log(b);
// //console.log(c);




// const array = [1, 2, 3];        // was missing, caused the ReferenceError
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   //  console.log(element);       // added so the loop does something visible
// //}

// //console.log(a);                 // 300


function one (){
    const username = "kalpana"

    function tow(){
        const clas = "Mscit"
        //console.log(username);
        
        
    }
    //console.log(clas);
    tow()
    
}
one()



if (true){
    const username = "kalpana"
    if (username === "kalpana"){
        const clas = "Mscit"
        //console.log(username+clas);
        
    } 
    //console.log(clas);
    
}
//console.log(username);



/// insrstin
console.log(addone(5));

function addone (num){
    return num +1

}
console.log(addTow(2));

const addTow = function(num){
    return num + 2
}



