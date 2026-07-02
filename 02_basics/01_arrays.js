//array

const myArr = [0, 1, 2, 3, 4, 5]
const myPrincesses = ["cindrella","rapunzal","ariel"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[5])

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //element ko 1st index pr add karega
// myArr.shift() //first index ki value remove karega

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))

const newArr = myArr.join()

// console.log(myArr)

// console.log(newArr); //string

//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3) //index 1 to 3 slice krta h, 3 exclusive

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3) //index 1 to 3 print krta h, 3 inclusice or original array se wo part htt jata hai
console.log("C", myArr)
console.log(myn2)