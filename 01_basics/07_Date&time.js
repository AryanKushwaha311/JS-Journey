import { Temporal } from "@js-temporal/polyfill";

// console.log(Temporal.Now.instant().toString());
// console.log(Temporal.Now.zonedDateTimeISO("Asia/Kolkata").toString());

// //Old Way
// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toLocaleString("en-IN"));

//Modern Way
// const myDate2 = Temporal.Now.instant();
// const myDate3 = Temporal.Now.zonedDateTimeISO("Asia/Kolkata");

// console.log(myDate2.toString());
// console.log(myDate3.toString());


//1. plainDateISO() -> it gives only date instead of date and time both.
// const myDate = Temporal.Now.plainDateISO();
// console.log(myDate.toString());

//2.toLocaleString() -> Converts a date and time into a human-readable format based on a locale, such as Indian or American formatting.
// const myDate = Temporal.Now.instant();
// console.log(myDate.toLocaleString("en-IN"));

//3.toJSON() ->Returns a string representation of a date for JSON serialization. For Date, it produces the same UTC string as toISOString(). It's commonly used automatically by JSON.stringify()
const myDate =Temporal.Instant.from("2026-10-27T07:00:00Z");

console.log(myDate.toJSON());
console.log(JSON.stringify({ date: myDate }));

console.log(typeof myDate);




