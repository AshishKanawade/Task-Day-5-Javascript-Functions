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
function areBothOdd(num1, num2) {
    if (num1 % 2 != 0 && num2 % 2 != 0) { 
        return true 
    } else { 
        return false 
    }
}
var odd1 = areBothOdd(1, 3);
var odd2 = areBothOdd(1, 4);
var odd3 = areBothOdd(2, 3);
var odd4 = areBothOdd(0, 0);
console.log(odd1);
console.log(odd2);
console.log(odd3);
console.log(odd4);



// Write a function called “getFullName”.
function getFullName(firstName, lastName) {
    if ((firstName != '') && (lastName != '')) {
    return firstName + " " + lastName
    } else { 
        return firstName + lastName 
    }
}
var fullName1 = getFullName("GUVI", "GEEK");
var fullName2 = getFullName("GUVI", "");
var fullName3 = getFullName("", "GEEK");
var fullName4 = getFullName("","");
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);



// Write a function called “getLengthOfWord”.
function getLengthOfWord(word1) {
    if (typeof(word1) == "string") { 
        return word1.length 
    }
    else { 
        return -1 
    }
}
var length1 = getLengthOfWord("GUVI");
var length2 = getLengthOfWord("");
var length3 = getLengthOfWord();
var length4 = getLengthOfWord(9);
console.log(length1);
console.log(length2);
console.log(length3);
console.log(length4);



// Write a function called “isSameLength”.
function isSameLength(word1, word2) {
    if (word1.length == word2.length) {
        return true;
    } else {
        return false;
    }
}
var length1 = isSameLength("GUVI", "GEEK");
console.log(length1);



// calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}



// Write a function called “getNthElement”.
function getNthElement(array,n) {
    if (array.lengh == 0) {
        return 0;
    } else {
        return array[n];
    }
}
var arr = getNthElement([1, 3, 5], 1);
console.log(arr);



// Write a function called “getLastElement”.
function getLastElement(array) {
    if (array.length == 0) {
        return -1;
    } else {
        return array[array.length - 1];
    }
}
var arr = getLastElement([1, 2, 3, 4]);
console.log(arr);



// Write a function called “getProperty”.
var obj = {
    mykey: "value"
};
function getProperty(obj, key) {
   return obj[key] 
}
var result1 = getProperty(obj,'mykey');
var result2 = getProperty(obj,'dummykey');
console.log(result1);
console.log(result2);



// Write a function called “addProperty”.
var obj = {
    mykey: "value"
};
function addProperty(obj, key) {
    obj[key] = true; 
    return obj
}
var result = addProperty(obj, "mykey");
console.log(result);



// Write a function called “removeProperty”

function removeProperty(obj, key){
    delete obj.key;
}
var remove = removeProperty(obj, "name");
console.log(remove);



// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    var count = 0;
    var sum = 0;
    var result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        } else {
            sum = sum + arr[i];
        }
    }
    result.push(count);
    result.push(sum);
    return result;
}
var num = ar2(arr);
console.log(num);



// Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar) {
    let result = []
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > 0) {
            result.push(ar[i])
        }
    }
    return result
}
var ar2 = getPositives(ar);
console.log(ar2);



// Write a function `powersOfTwo`
function powersOfTwo(n) {
    var res = [];
    for (i = 0; i <= n; i++) {
        res.push(Math.pow(2, i));
    }
    return res;
}
var result1 = powersOfTwo(0);
var result2 = powersOfTwo(1);
var result3 = powersOfTwo(2);
console.log(result1);
console.log(result2);
console.log(result3);



// Find the maximum number in an array of numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar) {
    var maxNum = 0;
    for (i = 0; i < ar.length; i++) {
        if (ar[i] > maxNum) {
            maxNum = ar[i];
        }
    }
    return maxNum;
}
var max = findMax(ar);
console.log("Max: ", max);



// Print the first 100 prime numbers
printPrimes(100);
function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while(n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, " → ", i);
            n++;
        }

        i++;
    }
}
function isPrime(n) {
    if (n != 1 && n != 0) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        };
        return true;
    }
    return false;
}



// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
var result = getPrimes(10, 100);
function getPrimes(nPrimes, startAt) {
    var n = 0;
    var i = startAt;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, " → ", i);
            n++;
        }

        i++;
    }
}
function isPrime(n) {
    if (n != 1 && n != 0) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        };
        return true;
    }
    return false
}



// Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
    var arr = s.split('').reverse().join('');
    return arr
}



// Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {
    for (let i = 0; i<ar2.length; i++) {
        ar1.push(ar2[i]);
    }
    return ar1;
}



// Calculate the sum of numbers received in a comma delimited string
var num = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
var s = num.split(",");
function sumCSV(s) {
    var sum = 0;
    for (i = 0; i < s.length; i++) {
        sum = sum + (+s[i]);
    }
    return sum;
}
var sum = sumCSV(s);
console.log(sum);