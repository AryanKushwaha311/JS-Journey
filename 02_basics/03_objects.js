//singleton
//object literals

const JsUser = {
    name : "Hitesh",
    "full name" : "Aryan Kushwaha",
    age : 22
};

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);  //IMPORTANT

//Symbol
const key = Symbol("456");
const JsUser2 = {
    name : "Aryan",
    "full name" : "Aryan Kushwaha",
    [key] : "1234",
    age : 22
};

console.log(JsUser2[key]);
console.log(typeof JsUser2); 

