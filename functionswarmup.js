// Write a function called “addFive”
function addFive(num) { 
    return 5 + num; 
}
var result = addFive(5)
var result1 = addFive(0)
var result2 = addFive(-5)
console.log(result)
console.log(result1)
console.log(result2)



// Write a function called “getOpposite”
function getOpposite(num) {
    return num * -1
}
var result = getOpposite(5);
var result1 = getOpposite(0);
var result2 = getOpposite(-5);
var result3 = getOpposite("5a");
var result4 = getOpposite(5.5);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);



// Fill in your code that takes an number minutes and converts it to seconds
function toSeconds(min) {
    return min * 60
}
var secs1 = toSeconds(5);
var secs2 = toSeconds(3);
var secs3 = toSeconds(2);
console.log(secs1);
console.log(secs2);
console.log(secs3);



// Create a function that takes a string and returns it as an integer
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint1 = toInteger("6");
var myint2 = toInteger("1000");
var myint3 = toInteger("12");
console.log(myint1);
console.log(myint2);
console.log(myint3);



// Create a function that takes a number as an argument, increments the number by +1 and returns the result
function nextNumber(myint) {
    return myint + 1;
}
var myNextint1 = nextNumber(0);
var myNextint2 = nextNumber(9);
var myNextint3 = nextNumber(-3);
console.log(myNextint1);
console.log(myNextint2);
console.log(myNextint3);



// Create a function that takes an array and returns the first element
function getFirstElement(arr) {
    return arr[0];
}
var data1 = getFirstElement([1, 2, 3]);
var data2 = getFirstElement([80, 5, 100]);
var data3 = getFirstElement([-500, 0, 50]);
console.log(data1);
console.log(data2);
console.log(data3);



// Convert Hours into Seconds
function hourToSeconds(arr) {
    return arr * 3600;
}
var data1 = hourToSeconds(2);
var data2 = hourToSeconds(10);
var data3 = hourToSeconds(24);
console.log(data1);
console.log(data2);
console.log(data3);



// Find the Perimeter of a Rectangle
function findPerimeter(num1,num2) {
    return 2 * (num1 + num2);
}
var peri1 = findPerimeter(6, 7);
var peri2 = findPerimeter(20, 10);
var peri3 = findPerimeter(2, 9);
console.log(peri1);
console.log(peri2);
console.log(peri3);



// Less Than 100?
function lessThan100(num1,num2) {
    if ((num1 + num2) < 100) {
        return true
    }
    else {
        return false
    }
}
var res1 = lessThan100(22, 15);
var res2 = lessThan100(83, 34);
console.log(res1);
console.log(res2);



// Return that value
function remainder(num1,num2) {
    return num1 % num2
}
var res1 = remainder(1, 3);
var res2 = remainder(3, 4);
var res3 = remainder(-9, 45);
var res4 = remainder(5, 5);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);



// Function that returns the total number of legs of all the animals
function CountAnimals(tur,horse,pigs) {
    return (tur * 2) + (horse * 4) + (pigs * 4)
}
var legs1 = CountAnimals(2, 3, 5);
var legs2 = CountAnimals(1, 2, 3);
var legs3 = CountAnimals(5, 2, 8);
console.log(legs1);
console.log(legs2);
console.log(legs3);



// Frames Per Second
function frames(num1,num2) {
    return num1 * num2 * 60
}
var fps1 = frames(1, 1);
var fps2 = frames(10, 1);
var fps3 = frames(10, 25);
console.log(fps1);
console.log(fps2);
console.log(fps3);



// Check if an Integer is Divisible By Five
function divisibleByFive(num) {
    if (num % 5 == 0) {
        return true;
    } else {
        return false;
    }
}
var divisible1 = divisibleByFive(5);
var divisible2 = divisibleByFive(-55);
var divisible3 = divisibleByFive(37);
console.log(divisible1);
console.log(divisible2);
console.log(divisible3);



// Write a function called “isEven”.
function isEven(num) {
    if (parseInt(num) == num) {
        if (num % 2 === 0) { 
            return true 
        } else { 
            return false 
        }
    }
    else { return -1 }
}
var even1 = isEven(12);
var even2 = isEven(0);
var even3 = isEven(11);
var even4 = isEven("11h");
console.log(even1);
console.log(even2);
console.log(even3);
console.log(even4);



// Write a function called “areBothOdd”.




// Write a function called “getFullName”.




// Write a function called “getLengthOfWord”.




// Write a function called “isSameLength”.




