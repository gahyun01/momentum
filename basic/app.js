// alert("hi");
// console.log("lalalalala");



// 2.2 Variables && 2.3 const and let
const a = 5;
const b = 2;
let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas";
console.log("your new name is " + myName);



// 2.4 Booleans
const amI = true;
const amIFat = null;    // 값이 없음.
let something;      // undefined - 값이 지정되지 않음.
console.log(amIFat);
console.log(something);



// 2.5 Arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
//console.log(daysOfWeek, nonsense);
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);     // 5번째 -> "fri"

// Add one more day to the array
daysOfWeek.push("sun");     // 배열 마지막 비트에 추가
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("Kimbab");