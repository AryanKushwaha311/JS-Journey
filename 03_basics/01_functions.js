//SYNTAX
function sayMyName() {
    console.log("A");
}

console.log(sayMyName());

//RETURN
function loginUserMessage(username){
    if(username === undefined){
        // we can also user "if(!username)"
        return "Please enter your username";
    }
    return `${username} just logged in`;
}

loginUserMessage("hitesh");
console.log(loginUserMessage());


//REST OPERATOR
function add(val1,val2,...num1){

    return [num1,val1,val2];
}

console.log(add(1,2,3,4));

//SPREAD OPERATOR
const numbers = [10, 20, 30, 40];

console.log(...numbers);