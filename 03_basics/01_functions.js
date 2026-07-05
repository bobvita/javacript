function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");   
}

// sayMyName()

// function addTwoNummbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNummbers(number1, number2){
    // let result = number1 + number2
    // return result
     return number1 + number2
}

const result = addTwoNummbers(2, 6)

// console.log("Result:", result)

function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("BAbita"));
// console.log(loginUserMessage()) //undefined just logged i n

function calculateCartPrice(...num1){ //rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500,2000)) // op-> [200, 400, 500, 2000]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Usename is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Babita",
    price: 899
})

const myArray = [200, 300, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

