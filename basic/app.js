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



// 2.6 Objects
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;
player.lastName = "potato";    // 새로운 key를 추가함 ( lastName )
player.points = player.points + 15;
console.log(player);



// 2.7 Functions part One && 2.8 Functions part Two
function sayHello(nameOfPerson, age) {
    // console.log("Hello!");
    // console.log(nameOfPerson);
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
// sayHello();
console.log("hello");   // 함수에 데이터를 보내려면 ()안에 데이터를 넣어줘야함.

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

// function plus(a, b){
//     console.log(a + b);
// }
// plus();    // NaN (Not a Number) - 값이 없음. <- a와 b에 값을 넣어줘야함.
// plus(8, 60);


// simple calculator2
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a / b);
}
// plus(8, 60);    // firstNumber == 8, secondNumber == 60
plus(60, 8);    // firstNumber == 60, secondNumber == 8
divide(98, 20);

const player1 = {
    name: "nico",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
};

console.log(player1.name);
player1.sayHello("lynn");