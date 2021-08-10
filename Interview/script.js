console.log("reverse words in string");

/*
// long solution
function reverseString(str) {
    let arr = str.split(' ');
    let revedArr = [];
        arr.map(word => {
        let revedWord=[]
        word.split('').map(letter => {
            revedWord.unshift(letter);
        });
            revedArr.push(revedWord.join(""));
        })
    
    return (revedArr.join(' '));
}
*/
//short solution
/*function reverseString(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseString("Welcome to this Javascript Guide!"));
*/

/*console.log('check is array');
function isArr(arr) {
    return Array.isArray(arr);
}
console.log(isArr('str'));

console.log('check is object');
function isObj(obj) {
    return !obj instanceof Array && obj instanceof Object ? true : false;
}
console.log(isObj([]));
*/
/*let myArr = [1, 2, 3];
let copyArr = [...myArr];
let duplicate = [...myArr, ...myArr];
copyArr.push(4);
myArr.length=0;
console.log(copyArr);
console.log(duplicate);
*/

//fizzbuz
/*let fizzBuzz = () => {
    let resultArray = [];
    for (let i = 1; i <= 100; i++) {
        //let result = i%3==0 && i % 5==0 ? 'fizzBuzz' : i % 3==0 ? 'fizz' : i % 5==0 ? 'buzz' : i;
        let result = i % 3 == 0 ? (i % 5 == 0 ? 'fizzBuzz' : 'fizz') : i % 5 == 0 ? 'buzz' : i;
        resultArray.push(result);
    };
    return resultArray;
}
console.log(fizzBuzz());*/

//anagrams
/*let isAnagram = (str1, str2) => {
    return str1.toLowerCase().split("").sort().join("") ===
        str2.toLowerCase().split("").sort().join("");
};
console.log(isAnagram('May', 'Amy'));*/
// more than two args
/*let isAnagram = (...args) => {
   for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase().split('').sort().join('') !== args[0].toLowerCase().split('').sort().join('')) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram('May', 'Amy', 'yam'));
*/
// panindolum
/*let isPanindolum = (str1, str2) => {
    let first = str1.toLowerCase().split('').reverse().join('');
    let second = str2.toLowerCase();
    return first === second;
}

console.log(isPanindolum('Amy', 'yma'));

*/

