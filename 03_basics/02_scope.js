let a = 400

if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); //isko iske scope ke bahr v access kr sakte h isliye var ka use nahi karte

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    //console.log(website);

    two()

}
// one()

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " Youtube"
        //console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



//+++++++++++++++++++++++++interesting++++++++++++++++++++++++++++

console.log(addOne(5)) //gives ans correctly

function addOne(num){
    return num + 1
}

addTwo(5) //gives error, ye function variable  me store kiya hua h toh declaration se phle access nahi kar sakte

const addTwo = function(num){
    return num + 2
}

