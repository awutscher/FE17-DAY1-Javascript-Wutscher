console.log("Hello from the Console");
document.write("Hello from the Browse");

var userName = "Martin"

console.log(`Hi my name is ${userName}`);

var hiMyNameIs = `Hi my name is ${userName}`;

var players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log(`the most valuable player of the match is ${players[2]}`);

var carArray=["Tesla","Audi","Renault","Volvo","Mazda","Fiat","Ferrari"];
console.log(carArray);
var carArraySorted = carArray.sort();
console.log(carArraySorted);

var fruitArray = ["apple", "banana", "kiwi"];
console.log(fruitArray);
fruitArray.push("orange");
console.log(fruitArray);


var animalArray = ["monkey", "horse", "dog"];
console.log(animalArray);
animalArray.unshift("cat");
console.log(animalArray);

var inputString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var inputArray = inputString.split("/");
console.table(inputArray);


let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

let sum1 = a+b+parseFloat(c)+parseFloat(d)+e;
console.log(sum1);

let people = ["Greg", "Mary", "Devon","James"];
console.log(people);
people.shift();
console.log(people);
people.unshift("Matt");
console.log(people);
people.pop();
console.log(people);
people.push("Alex");
console.log(people);
let people2 = people.slice(2,4);
console.log(people2);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon","James"];
console.log(people);
people.splice(2,1,"Elizabeth","Anna");
console.log(people);

var withBob = people + "," + "Bob";
console.log(withBob);

var multArray = [ 
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];

console.log(multArray[1][1]);
console.log(multArray[4][2]);
console.log(multArray[5][3]);
console.log(multArray[2][3]);
console.log(multArray[2][1]);
