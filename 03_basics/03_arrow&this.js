// this refers to "current context"


const user = {
    username : "aryan",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = 'Sam';
user.welcomeMessage();

console.log(this);  // global context

function one(){
    console.log(this);   //things "this" contains
}

one();

let username  = "naman";
function two(){
    console.log(this.username);
}

two();


// arrow function
// METHOD-01
() => {}; // -> basic syntax of arrow function

//METHOD-02
const Two = () => {};  // -> arrow function storing inside a variable

//METHOD-03
const Three = (num1 , num2) => {
    return num1 + num2;
};  // -> arrow function storing inside a variable with parameters

//METHOD-04 (IMPLICIT RETURN) -> "Hum ne maan liya h ki aap ne return kr diya h"
const four = (num1,num2) => (num1 + num2) ;

/* NOTE: {} mai rakha toh "return" krna padega 
         () mai "return" nhi use krna (IMPLICIT RETURN).
*/
