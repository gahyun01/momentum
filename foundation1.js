// alert("hi");

// console.log(5454545454);



    // Varialbe
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

let myName = "gahyun";
const veryLongVariableName = 0;
console.log("hello " + myName);

myName = "gahyun Jeong";

console.log("your new name is " + myName);



    // Booleans
const amI = true;
const amIFat = null;    // 값이 없음.
let something;      // undefined - 값이 지정되지 않음.
console.log(amIFat);
console.log(something);



    // Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
//console.log(daysOfWeek, nonsense);
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);     // fri

// Add one more day to the array
daysOfWeek.push("sun");     // 배열 마지막 비트에 추가
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("Kimbab");



    //Object ( 객체 )
// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

//const player = ["nico", 1212, false, "little bit"];

// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// console.log(player);
// player.fat = false;
// player.lastName = "potato"; // 새로운 key를 추가함 ( lastName )
// player.points = player.points + 15;
// console.log(player);



    //Function ( 함수 )
function sayHello(nameOfPerson, age){
    // console.log("Hello !");
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
plus(8, 60);
function divide(a, b){
    console.log(a / b);
}
divide(98, 20);



    // player object
const player = {
    name: "nico",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");



    // Calculator object
const Calculator = {
    plus: function(a, b){
        return (a + b);
    },
    minus: function(a, b){
        return (a - b);
    },
    times: function(a, b){
        return (a * b);
    },
    divide: function(a, b){
        return (a / b);
    },
    power: function(a, b){
        return (a ** b);
    },
};
const plusResult = Calculator.plus(2, 3);
const minusResult = Calculator.minus(plusResult, 10);
const timesResult = Calculator.times(10, minusResult);
const divideResult = Calculator.divide(timesResult, plusResult);
const powerResult = Calculator.power(divideResult, minusResult);

const ages = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;   
}
const krAge = calculateKrAge(ages);
console.log(krAge);



    // Conditionals ( 조건문 )
const age = prompt("How old are you?");

// console.log(isNaN(age));    // 숫자가 아니면 true, 숫자면 false
if(isNaN(age) || age < 0){
    console,log("Please write a number");
}
else if(age < 18){
    console.log("You are too young.");
}
else if(age >= 18 && age <= 50){
    console.log("You can drink.");
}
else if(age > 50 && age <= 80){
    console.log("You should exercise.");
}
else if(age === 100){
    console.log("wow you are wise.");
}
else if(age > 80){
    console.log("You can do whatever you want.");
}
