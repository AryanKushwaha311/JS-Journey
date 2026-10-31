//object literal
const tinderUser = {};

//**************Singleton***************************
const tinderUser2 = new Object();
tinderUser2.id = '123abc';
tinderUser2.name = "Ken Williamson";
tinderUser2.isLoggedIn = false;

console.log(tinderUser2);

//*****************assign (IMPORTANT)****************

const target = {a:1 , b:2};
const source = {b:3,c:4};
// const returnedTarget = Object.assign(target,source);
const returnedTarget = Object.assign({},target,source);
 
console.log(target);
console.log(returnedTarget);
console.log(target == returnedTarget);


//**************SPREAD OPERATOR**************/
const obj3 = {...target , ...returnedTarget};
console.log(obj3);

