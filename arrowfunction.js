// Print odd numbers in an array
var array = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var oddNumbers = (array) => {
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) 
        result.push(array[i]);
        
    }
    return result;
}
console.log(oddNumbers(array));




// Convert all the strings to title caps in a string array
var stringarray = ["hello", "world", "ashish", "kanawade"];
var titlecase = (stringarray) => {
    var title = [];
    for (let i = 0; i < stringarray.length; i++) {
    title.push(stringarray[i].split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
    }
    return title;
}
console.log(titlecase(stringarray));




// Sum of all numbers in an array
var sum = 0;
var numbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(numbers(array));;




// Return all the prime numbers in an array
var primes = (array) => {
    var num = [];
    for (let i = 0; i < array.length; i++) {
        var count = 0;
        for (let j = 1; j <= array[i]; j++) {
            if (array[i] % j === 0)
            count++;
        }
        if (count === 2)
        num.push(array[i]);
    }
    return num;
}
console.log(primes(array));




// Return all the palindromes in an array
var arr = ["hello", "refer", "king", "noon", "radar", "121", "128", "32423"];
var palindromes = (arr) => {
    var arr1 = [];
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) 
        { arr1.push(arr[i]); }
    } 
    return arr1;
};
console.log(palindromes(arr));