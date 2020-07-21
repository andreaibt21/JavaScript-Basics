console.log("Starting javascript...");

var myName = "Andrea";

console.log(myName);

var age = 21;

console.log(age);

var ignasiAge = 32;

var ageDiff = age - ignasiAge;

console.log(ageDiff);

if (age > 21) {
    console.log("You are older than 21")
} else {
    console.log("You are not older than 21")
};

if (age > ignasiAge) {
    console.log("Ignasi is older than you")
} else if (age < ignasiAge) {
    console.log("Ignasi is older than you")
} else {
    console.log("You have the same age as Ignasi")
}

var classNames = ["Andrea", "Brako", "Janneth", "Flor", "Belu", "Luana", "Nadu", "Rodrigo"];
//change the order to be A-Z
classNames.sort();
//print first name
console.log(classNames[0]);
//print last name
console.log(classNames[classNames.length - 1]);
//print all names 
for (var i = 0; i < classNames.length; i++) {
    console.log(classNames[i])
};

var classAges = [21, 20, 32, 19, 20, 22, 24, 32]

//print every age
var i = 0;
while (i < classAges.length) {
    console.log(classAges[i])
    i++;
}
//print even numbers  

/*var j=0;
while(j < classAges.length){
 
if (classAges[j] % 2 == 0){
    console.log( "even numbers:" + classAges[j])
}
j++;
}; */

for (var i = 0; i < classAges.length; i++) {
    if (classAges[i] % 2 == 0) {
        console.log("even numbers:" + classAges[i])
    }
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//min number of an array
function minNumber(arrayNumber) {
    var min = Math.min.apply(null, arrayNumber);
    console.log(min)
}
minNumber(numbers);
//max number of an array
function maxNumber(arrayNumber) {
    var max = Math.max.apply(null, arrayNumber);
    console.log(max)
}
maxNumber(numbers);
//The function will print the value of the element at 
//the given position (one-based) to the console.
function giveNumber(array, index) {
    var indexGiven = array[index]
    console.log(indexGiven)
}

giveNumber(numbers, 4);
giveNumber(numbers, 5);
giveNumber(numbers, 6);


var numbers2 = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9, 10];

// only prints the values that are repeated  
/*function repeat(array) {
    var repeatedNum = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                repeatedNum.push(array[j])
            }
        }
    }
    console.log(repeatedNum)
}
repeat(numbers2)
*/
myColor = ["Red", "Green", "White", "Black"];

//join all elements of the following array into a string. 

function joinItems(array) {
    console.log(array.join(", "))
}
joinItems(myColor);

// that reverses a number

function reverse(num) {
    var newNum = parseFloat(num
        .toString()
        .split('')
        .reverse()
        .join(''));
    console.log(newNum)
}

reverse(123456)

//alphabetic order

function alphabetic(word) {
    var changeOrder =
        word
            .split('')
            .sort()
            .join('');
    console.log(changeOrder)
}
alphabetic('jhbgfstatfs')


//Camel case 

function camelCase(string) {

    var changeword = string.split(' ');

    for (var i = 0; i < string.length; i++) {
        var word = string[i]
            .charAt(0)
            .toUpperCase()
    }

    


    //   .join(' ');
    //  console.log(a)
}
//camelCase('princess of persia')