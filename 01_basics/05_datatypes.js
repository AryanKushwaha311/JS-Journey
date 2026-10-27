/*
JavaScript is a dynamically typed language.
- A variable can hold different types of values without explicitly declaring its type.
- The type is determined at runtime and can change when you assign a different value.
let value = 10;       // Number
value = "Hello";      // String
value = true;         // Boolean
*/

const a = Symbol(123);
const b = Symbol(123);
console.log(a == b);


// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudhary.com"
let anothername = myYoutubename;
console.log(anothername);

let Student = {
    email : "username.gmail.com",
    password : "Aryan@1234"
}

let Student2 = Student;
Student2.email = "nitin@gmail.com"
console.log(Student2);
console.log(Student);




