// /*
// function:-
// 1.Anonymous Function
// cd(result()) ->execute and print the return value of the function
// */

// // const result = function(){
// //     console.log("hello");
// //     return 110;
// // };

// // console.log(result());

// /*
// 2. REST OPERATOR:-
// when you have a function but dont know how many number of times a parameter comes
// */

// const greet = function(...num){
//     console.log(num);
// }

// console.log(greet(2,3,1,2));

// /*
// SPREAD OPERATOR : Suppose we have an array and want to expant it.
// */

// const arr = [1,2,4,5];
// console.log(...arr);




// GLOBAL SCOPE

// const username = "Aryan";
// function greet(){
//     console.log(username);
// }
// greet();

// console.log(username);



// // LOCAL SCOPE

// const username2 = "Aryan";
// const x = 23;
// function greet(){
//     const x = 50;
//     console.log(x);
//     console.log(username2);
// }
// greet();

// console.log(x);
// console.log(username2);

// console.log("hello");

if(true){
    const user = "Taran";
    console.log(user);
}

// console.log(user);