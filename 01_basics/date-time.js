// date 

let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

console.log(typeof date);

//let myCurrentDate = new Date(202,0,23,5,3)
let myCurrentDate = new Date("2026-10-04")
console.log(myCurrentDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCurrentDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long"
})


