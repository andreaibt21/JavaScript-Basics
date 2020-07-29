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

//Array functions

var classNames = ["Andrea", "Brako", "Janneth", "Flor", "Belu", "Luana", "Nadu", "Rodrigo"];

//Exercise 1
//change the order to be A-Z
classNames.sort();
console.log(classNames[0]); //print first name
console.log(classNames[classNames.length - 1]);//print last name 
for (var i = 0; i < classNames.length; i++) {
    console.log(classNames[i])//print all names
};


var classAges = [21, 20, 32, 19, 20, 22, 24, 32]

//Exercise 2
//print every age
//print even numbers  
function evenNum1() {
    var i = 0;
    while (i < classAges.length) {
        console.log('All ages: ', classAges[i])
        i++;
    }
    var j = 0;
    while (j < classAges.length) {
        if (classAges[j] % 2 == 0) {
            console.log("Even numbers: ", classAges[j])
        }
        j++;
    };
}

//print even numbers
evenNum1(numbers)
function evenNum2() {

    for (let j = 0; j < classAges.length; j++) {
        console.log('All ages: ', classAges[j]);
    }
    for (var i = 0; i < classAges.length; i++) {
        if (classAges[i] % 2 == 0) {
            console.log("even numbers: ", classAges[i])
        }
    };

}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Exercise 3
//min number of an array

 function min(arrayNumber){
     var menor = arrayNumber[0];
     for(var i= 0; i < arrayNumber.length; i++) {
        if ( arrayNumber[i] < menor){
            menor= arrayNumber[i]
        }
    }
    console.log('The lowest number is:' , menor )
 }
min(numbers)


//Exercise 4
//max number of an array
function maxNumber(arrayNumber) {
    var max = arrayNumber[0];
    for (let i = 0; i < arrayNumber.length; i++) {
        if(max < arrayNumber[i]){
            max = arrayNumber[i]
        }
        
    }
  console.log('The biggest number is:' , max)
}

maxNumber(numbers);


//Exercise 5
//The function will print the value of the element at 
//the given position (one-based) to the console.
function giveNumber(array, index) {
    var indexGiven = array[index -1]
    console.log(indexGiven)
}

giveNumber(numbers, 4);
giveNumber(numbers, 5);
giveNumber(numbers, 6);


//Exercise 6
// only prints the values that are repeated  

var numbers2 = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9, 5, 10];

function repeat(array) {
    var numArray = [];
    var repeatedNum = [];
    for (var i = 0; i < array.length; i++) {
        if (!numArray.includes(array[i])) {
            numArray.push(array[i])
        } else if (numArray.includes(array[i]) && !repeatedNum.includes(array[i])) {
            repeatedNum.push(array[i])
        }
    }
    console.log(repeatedNum)
}
repeat(numbers2)

//Exercise 7
//join all elements of the following array into a string. 

myColor = ["Red", "Green", "White", "Black"];

function joinItems(array) {
    console.log(array.join(", "))
}
joinItems(myColor);

//STRING FUNCTIONS

//Exercise 1
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

 function rever(input){
     var string = "" + input;
     var array = string.split("");
     var reverse=[];
       
     for (var i = array.length; i >= 0; i--) {
       reverse.push(array[i]);
       
    }
    return reverse.join("")
 }
 console.log(rever("holaaa"))

//Exercise 2
//alphabetic order

function alphabetic(word) {
    var string = "" + word;
    var changeOrder =
        string
            .split('')
            .sort()
            .join('');
    console.log(changeOrder)
}
alphabetic('jhbgfstatfs')

//Exercise 3
//Camel Case 

function camelCase(string) {

    var changeWord = string.split(' ');
    var newCamel = [];
    for (var i = 0; i < changeWord.length; i++) {
        var word = changeWord[i]
            .charAt(0)
            .toUpperCase() + changeWord[i].slice(1);
        newCamel.push(word)


    }
    console.log(newCamel.join(' '))
}
camelCase('princess of persia')
camelCase('jorgelin andresin')


//Exercise 4
//longest word on a phrase
 function longestWord (string) {
      var words = string.split(' ');
      var aux = string[0];

      for(var i = 0; i < words.length; i++){
          if(aux.length < words[i].length){
              aux = words[i];
          }
      };
    console.log('The longest word in the string is: ' , aux)  
 }
longestWord("Web Development Tutorial")

