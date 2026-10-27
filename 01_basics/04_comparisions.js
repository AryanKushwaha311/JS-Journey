//**************COMPARISIONS****************/

// NOTE:-The reason is that an equality check == and comparisons >, <, >=, <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

 
/*
NOTE:- undefined converts to NaN in numeric comparisons, so comparisons like undefined >= 0 and undefined > 0 both return false.
Unlike null, which converts to 0, undefined represents a missing or unassigned value. */

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


/*
NOTE:- == (Loose Equality): Compares values after type conversion if needed. Example: 5 == "5" → true.
    === (Strict Equality): Compares both value and data type without conversion. Example: 5 === "5" → false.
*/

console.log(5 == 5);
console.log(5 == "5");





