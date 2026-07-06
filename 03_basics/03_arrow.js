
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // ye context(this) obj ke andr he kaam karta hai, function ke andr nahi
// }

// chai()

 
const chai = () => { //arrow function
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //implicit return

//curly braces use kiya to return keyword likhna padega paranthesis me nahi

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"}) //object kp return karne k liye parenthesis mein wrap karna he padega

console.log(addTwo(3, 4))

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()