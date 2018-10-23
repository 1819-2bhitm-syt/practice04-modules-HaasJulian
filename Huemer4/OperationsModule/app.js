// Ersetze 50 durch deine Katalognummer
function printCalculation(operator, calculate){
    console.log("4 " + operator + " 7 = " + calculate(50, 7))

    printCalculation("+", calculate.sum);
    printCalculation("+", calculate.difference);
    printCalculation("+", calculate.product);
    printCalculation("+", calculate.quotient);