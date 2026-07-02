//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2026,6, 2) //JS me month 0 se start hote hai 0->Jan
// let myCreatedDate = new Date(2026,6, 2, 11, 35)
// let myCreatedDate = new Date("2026-07-02") //jab YY-MM-DD karte hai tab month 1 se start hote hai
let myCreatedDate = new Date("07-02-2026") //MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleDateString('default'{
    weekday: "long",
})