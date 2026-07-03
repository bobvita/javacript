// singleton
//Object.create

// object literals

const mySym = Object("key1")

const JsUser = {
    name: "Babita",
    "full name": "Babita Das",
    age: 18,
    [mySym]: "mykey1", // symbol ki trh access karne k liye
    location: "Jaipur",
    email: "babita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // this cannot be accessed using dot method
// console.log(JsUser[mySym]);
// console.log(typeof mySym)

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // iske baad values me changes nhi honge
JsUser.email = "harish@amazon.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());