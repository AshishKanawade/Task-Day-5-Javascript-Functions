// Print odd numbers in an array
// Anonymus function
var array = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var oddNumbers = function(array) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) 
        result.push(array[i]);
        
    }
    return result;
}
console.log(oddNumbers(array));


// IIFE
console.log((function(array) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1)
        result.push(array[i]);
    }
    return result;
})(array));




// Convert all the strings to title caps in a string array
// Anonymus function
var stringarray = ["hello", "world", "ashish", "kanawade"];
var titlecase = function(stringarray) {
    var title = [];
    for (let i = 0; i < stringarray.length; i++) {
    title.push(stringarray[i].split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
    }
    return title;
}
console.log(titlecase(stringarray));


//IIFE
console.log(function(stringarray) {
    var title = [];
    for(let i = 0; i < stringarray.length; i++) {
    title.push(stringarray[i].split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
    }
    return title;
}(stringarray));




// Sum of all numbers in an array
// Anonymus function
var sum = 0;
var numbers = function(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(numbers(array));


// IIFE
console.log((function(array) {
    var sum = 0;
    for (let i in array) {
        sum += array[i];
    }
    return sum;
})(array))




// Return all the prime numbers in an array
// Anonymus function
var primes = function(array) {
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


//IIFE
console.log((function(array) {
    var num = [];
    for (let i = 0; i < array.length; i++) {
        var count = 0;
        for (let j = 1; j <= array[i]; j++) {
            if (array [i] % j === 0)
            count++;
        }
        if (count === 2)
        num.push(array[i]);
    }
    return num;
})(array));




// Return all the palindromes in an array
// Anonymus function
var arr = ["hello", "refer", "king", "noon", "radar", "121", "128", "32423"];
var palindromes = function(arr) {
    var arr1 = [];
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) 
        { arr1.push(arr[i]); }
    } 
    return arr1;
};
console.log(palindromes(arr));


//IIFE
console.log((function(arr) {
    var arr1 = [];
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) 
        { arr1.push(arr[i]); }
    } 
    return arr1;

})(arr));




// Return median of two sorted arrays of same size
// Anonymus function
let array1 = [1, 5, 9, 6, 2];
let array2 = [3, 2, 7, 8, 4];
let median = function () {
    let newarray = [];
    for (i = 0; i < array1.length; i++) {
        newarray.push(array1[i]);
    }
    for (j = 0; j < array2.length; j++) {
        newarray.push(array2[j]);
    }
    newarray.sort();
    let result =  (newarray[(newarray.length / 2)]  +  newarray[(newarray.length / 2) - 1]) / 2;
    console.log(result);
}
median();


//IIFE
console.log(function () {
let newarray = [];
    for (i = 0; i < array1.length; i++) {
        newarray.push(array1[i]);
    }
    for (j = 0; j < array2.length; j++) {
        newarray.push(array2[j]);
    }
    newarray.sort();
    let result = (newarray[(newarray.length / 2) - 1] + newarray[(newarray.length / 2)]) / 2;
    console.log(result);
})
median();




// Remove duplicates from an array
// Anonymus function
let array3 = [6, 5, 8, 3, 5, 4, 1, 4, 6, 2, 5];
let unique = function(array3) {
    let uniq = [...new Set(array3)];
    return uniq;
}
console.log(unique(array3));


//IIFE
console.log(function(array3) {
    let uniq = [...new Set(array3)];
    return uniq;
}(array3));




// Rotate an array by k times
// Anonymus function
let arr3 = [1,2,3,4,5];
let newArray = arr3.slice();
let k = 3;
let rotatedArray = function(rotate) {
    for (var i = 0; i < k; i++) { 
        for (var j = rotate.length - 1; j > 0; j--) {
            var temp = rotate[j];
            rotate[j] = rotate[j - 1];
            rotate[j - 1] = temp;
        }
    }
    return rotate;
}
console.log(rotatedArray(arr3,k));


//IIFE
console.log(function(rotate) {
    for (var i = 0; i < k; i++) { 
        for (var j = rotate.length - 1; j > 0; j--) {
            var temp = rotate[j];
            rotate[j] = rotate[j - 1];
            rotate[j - 1] = temp;
        }
    }
    return rotate;
}(newArray,k));


