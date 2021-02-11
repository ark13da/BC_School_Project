let expectedResult;
/**
 * Task 1: You are provided with 2 arrays, firstArray, and secondArray
 * Make a new thirdArray, that contains elements of the firstArray, followed by 
 * elements of the secondArray.
 * Please don't do it manually :) 
 */

let firstArray = [1, 2, 3, 4, 'a', true, false];
let secondArray = ['hello', 'I', 'am', 'not', 'an', 'array', 'jkd']; 

expectedResult = [1, 2, 3, 4, 'a', true, false, 'hello', 'I', 'am', 'not', 'an', 'array', 'jkd'];

let task1 = () => { 
    //return [...firstArray, ...secondArray];
    //or
    let combined = [];
    firstArray.forEach(item => combined.push(item));
    secondArray.forEach(item => combined.push(item));
    return combined;
}
console.log(task1());

/**
 * Task 2: You are provided with an array of numbers
 * create another array that contains elements of the provided array, but in reverse order
 * do not use .reverse() method
 * Please don't do it manually :) 
 */

let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

expectedResult = [20000, 12345, 10000, 500, 234, 123456, 10000, 500, 1];

let task2 = () => { 
    return fourthArray.map((item, i) => fourthArray[fourthArray.length - 1 - i]);
}
console.log(task2());

/**
 * Task 3: You are provided with an array that contains some duplicated elements
 * create another array that contains ONLY unique elements of the given array
 * the order of the new array isn't important
 * Please don't do it manually :) 
 */

let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];

expectedResult = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 12345, 20000, true, false];

let task3 = () => { 
    let uniq =[];
    fifthArray.forEach(item => {
        if (!uniq.includes(item))
        { uniq.push(item) }
    });
    return uniq;
}
console.log(task3());
/**
 * Task 4: You are provided 2 arrays
 * write a logic that will compare elements of the 2 arrays to find out if they contain same elements
 * it is possible that the one of the array is a sub array of the other, in which case they shouldn't be considered as containing same elements
 * the order of elements in each array can be different
 * Please don't do it manually :) 
 */

// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, 'hello', true, false];
let seventhArray = ['hello', false, 1, 3, true, 2];

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, 'hello', 3, 'moi moi'];
let ninthArray = [];

let task4 = (a,b) => { 
    if (a.length == b.length) {
        return !(a.map(item => b.includes(item))).includes(false);
    } else { 
        return false;
    }
}
console.log(task4(sixthArray, seventhArray));
//if they are similar the function returns true.


/**
 * Task 5: The following array is nested (having array inside array)
 * you need to create a new array that will deconstruct the nested array so that it is no longer nested
 * the order isn't important
 * Please don't do it manually :) 
 */

let tenthArray = [
    'one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]
];

expectedResult = ['one', 'two', 'three', 1, 2, 3, false, 'false', 'oh oh', 'tom', 'jerry', 'not', 'again', 'yes', 'whynot?', true]

task5 = (a) => {
    let destructured = [];
    let looper = (arr) => {
        
        arr.forEach(item => {
            if (!Array.isArray(item)) {
                destructured.push(item);
            } else {
                looper(item);
            }
            
        
        });
    };
    looper(a);
    return destructured;
};
console.log(task5(tenthArray));

/**
 * Task 6: The array you are given contains all kinds of personal information
 * Filter out all email addresses into a separate array
 * Filter out all phone numbers into a separate array
 * Please don't do it manually :) 
 */

let peopleInfo = [
    'ron', '044 123 345', 'lonelyspider@email.com', 
    'hermione', '0123-414-443', 'hermione@email.com', 
    'harry', '(0123) 123 4324', 'ginnyforever@email.com'
];

let expectedNamesArray = ['ron', 'hermione', 'harry'];
let expectedPhones = ['044 123 345', '0123-414-443', '(0123) 123 4324']
let expectedEmails = ['lonelyspider@email.com', 'hermione@email.com', 'ginnyforever@gmail.com']

let task6 = (a) => { 
    let seperated = [];
    let emails = a.filter(i => /@/g.test(i));
    seperated.push(emails)
    let phones = a.filter(i => /\d/g.test(i)); 
    seperated.push(phones)
    let names = a.filter(i => !/@|\d/g.test(i)); 
    seperated.push(names)
    return seperated
}
console.log(task6(peopleInfo));

/**
 * Task 7: The current array contains a sample text
 * use the .split(' ') method to split the paragraph to an array of words
 * iterate through the array of words, check if each word contain the letter 'o'
 * if it does, store a value of 1 to a newArray, otherwise 0
 * Please don't do it manually :) 
 * Example:
 * sample = ['Lorem', 'ipsum', 'dolor', 'sit']
 * result = [1, 0, 1, 0]
 * 
 */

const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.';

let task7 = (a) => { 
    let bin = [];
    let sep = a.split(' ');
    sep.forEach(i => {
        if (/o/gi.test(i)) {
            bin.push(1);
        } else {
            bin.push(0);
        }
        
    });   
    return bin;
 
}

console.log(task7(sample));