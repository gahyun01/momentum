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



// 2.9 Recap && 2.10 Recap 2
// const c = 5;
// console.log(c);

// const isNicolasFat = true;
// isNicolasFat = false;   // error - const는 값을 변경할 수 없음.
let isNicolasFat = true;
isNicolasFat = false;   // let은 값을 변경할 수 있음.

let hello;
console.log(hello);     // undefined

const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me];

const toBuys = ["potato", "tomato", "pizza"];
// console.log(toBuys[2]);
console.log(toBuys);
toBuys[2] = "water";    // 3번째 요소를 변경함.
console.log(toBuys);
toBuy.push("meat");     // 배열 마지막에 추가함.
console.log(toBuys);

const player2 = {
    name: "Nico",
    age: 98,
};
console.log(player2.name);
// console.log(player2, console);  // console은 object임.
player2.name = "nicolas";
console.log(player2);
player2.sexy = "soon";    // 새로운 key를 추가함.
console.log(player2);

function plus1(){
    console.log(2 + 2);
}
plus1();

function plus2(potato, salad){
    console.log(potato + salad);
};

plus2(5, 10);
plus2(1.33453, 9898);
plus2(9898, 1.33453);

function minusFive(potato){
    console.log(potato - 5);
};
// console.log(potato);    // error - potato는 함수 내부에서만 사용 가능.

minusFive(5, 10, 12, 34, 4, 5, 6, 7);    // 처음에 들어온 값만 사용



// 2.11 Returns
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;   // return을 사용하여 값을 반환함.
}
const krAge = calculateKrAge(age);
console.log(krAge);



// 2.13 Conditionals
const age1 = parseInt(prompt("How old are you?"));
console.log(age1); // prompt에서 사용자가 값을 입력하지 않고 취소를 누르면 null이 출력됨.
console.log(typeof age1);    // age1의 type을 확인함. ( 항상 string임 )

// parseInt를 사용하여 string타입을 number타입으로 변환함.
console.log(typeof "15", typeof parseInt("15"));
console.log(typeof age1, typeof parseInt(age1));



// 2.14 Conditionals part Two
console.log(isNaN(age1)); // 숫자 == True, 숫자 != False

if(isNaN(age1)){
    console.log("Please write a number");
}else{
    console.log("Thank you for writing your age.");
}



// 2.15 Conditionals part Three
console.log(age1);

if(isNaN(age1) || age1 < 0){
    console.log("Please write a real positive number");
} else if(age1 < 18){
    console.log("You too young.");
} else if(age1 >= 18 && age1 <= 50){
    console.log("You can drink");
} else if(age1 > 50 && age1 <= 80){
    console.log("You should exercise");
} else if (age1 === 100) {
    console.log("wow you are wise");
} else if(age1 > 80){
    console.log("You can do whatever you want.");
} 
// age1 == 100이어도 실행되지 않음. ( age1 > 80 조건을 만족하기 때문 )
// else if (age1 === 100) {
//     console.log("wow you are wise");
// }



// 3.0 The Document Object
document.title = "Hello From JS!";



// 3.1 HTML in Javascript
const title = document.getElementById("title");
// console.log(title);
console.dir(title);
title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);