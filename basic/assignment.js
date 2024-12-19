// 2.10 Recap 2
console.log("Calculator");
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
    }
};
const plusResult = Calculator.plus(2, 3);
const minusResult = Calculator.minus(plusResult, 10);
const timesResult = Calculator.times(10, minusResult);
const divideResult = Calculator.divide(timesResult, plusResult);
const powerResult = Calculator.power(divideResult, minusResult);

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;   
}
const krAge = calculateKrAge(age);
console.log(krAge);