//concat

const marvel_heroes = ["spiderman" , "ironman" , "thor"];
const dc_heroes = ["batman" , "robin" , "superman"];

//CONCAT
const Universe_herores = marvel_heroes.concat(dc_heroes);
console.log(Universe_herores);

// SPREAD OPERATOR
const all_new_heros = [...marvel_heroes , ...dc_heroes];
console.log(all_new_heros);

//PUSH
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

//flat
const another_array = [1,2,3,[4,5],[6,7,[8,9,10]],[11,12]];
const real_another_arra2y = another_array.flat();
const real_another_array = another_array.flat(1);
const real_another_arra3y = another_array.flat(Infinity);

console.log(real_another_array);
console.log(real_another_arra2y);
console.log(real_another_arra3y);


//CONVERSION -> String to Array (from)
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"aryan"}));

//Of
const score1 = 21; 
const score2 = 22;
const score3 = 23;
console.log(Array.of(score1,score2,score3));



