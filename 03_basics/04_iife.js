// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})(); //semicolon imp hai func ke execution ko rokne k liye taaki next func execute ho sake

//function ko parenthessis me wrap karke direct call kardiye

// global scope se hone waale pollution ko hatane ke liye iife ka use karte, so that function immediately execute ho jaye

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); //arrow func ke form me v iife likh sakte hain
})("babita")