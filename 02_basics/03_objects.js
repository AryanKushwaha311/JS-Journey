//singleton:- constructor se object banega toh "singleton" hoga
//object literals:- jb normal se banega toh object literal :-

const JsUser = {
    name : "Hitesh",
    "full name" : "Aryan Kushwaha",
    age : 22
};

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);  //IMPORTANT

//****************Symbol****************
const key = Symbol("456");
const JsUser2 = {
    name : "Aryan",
    "full name" : "Aryan Kushwaha",
    email : "aryankush321@gmail.com",
    [key] : "1234",
    age : 22
};

console.log(JsUser2[key]);
console.log(typeof JsUser2); 

//**************OBJECT BAISCS******************/
JsUser.email = "aryan455@gmail.com";
console.log(JsUser.email);

//Object.freeze(JsUser);
JsUser.email = "aryan84@gmail.com";
console.log(JsUser.email);

console.log(JsUser2);

//***************important concept**************/
const JsUser3 = {
    name : "Aryan Kushwaha",
    email : "kushwaha@gmail.com",
}

JsUser3.greeting = function(){
    console.log("hello i am aryan");
};

// console.log(JsUser3.greeting);
// console.log(JsUser3.greeting()); 

//***************important concept************/
JsUser3.greetingTwo = function(){
    return `Hello , my name is ${this.name}`;
}

console.log(JsUser3.greetingTwo());


