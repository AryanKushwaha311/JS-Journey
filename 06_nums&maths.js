const balance = new String("fnnf");
console.log(balance);

const balance2 = new Number(99.99);
const balance3 = new Number(229.4);
console.log(balance2);
console.log(balance3);

//toFixed
console.log(balance2.toFixed(2));
//Precision
console.log(balance3.toPrecision(3));

//toLocaleString - commas according to the US standards.
const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));


//***************************MATHS******************************/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,2,8));

console.log();
console.log((Math.random()*10)+ 1);

//Generic Formula
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


console.log(typeof null);
console.log(typeof NaN);
console.log(Number("25"));
console.log(Number("25abc"));
console.log(Boolean("false"))

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(null == undefined);
console.log(null === undefined);












