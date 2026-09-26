const accountId = 123456789
let accountEmail = "kalpana@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountState  //not allowed because accountState is not defined

//accountId =2   //not allowed because accountId is a constant variable
console.log(accountId);
/*
Prefer to use var 
because of issuse with block scpe and function scope
*/
accountEmail = "kal@hc.con"
accountPassword = "11111"
acccountCity = "delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])





