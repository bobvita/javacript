const accountId = 1445533
let accountEmail = "babita@google.com"
var accountPassword = "12345"
accountCity = "Jodhpur"
let accountstate;

// accountId = 2 //not allowed
accountEmail = "bk@bk.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]) 

/*
prefer not to use var bescause 
of issue in the block scope and functional scope
*/