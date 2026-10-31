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


