// how to define an array | Indexed array
// array literal
let fruits // declaration
fruits = ["orange", "banana", [12, 13], "apple", " ", true, null, undefined, 12]; // initialization
// console.log(fruits);
// console.log(fruits.length); //The length property sets or returns the number of elements in an array
fruits.pop(); //The pop() method removes (pops) the last element of an array.
// console.log(fruits);
fruits.shift(); //The shift() method removes the first item of an array.
// console.log(fruits);
fruits.push("kiwi", "lemon"); //The push() method adds new items to the end of an array.
// console.log(fruits);
// console.log(fruits.length);


//The splice() method adds and/or removes array elements.
let cities = [ "dhaka", "mumbai", "istanbul", "delhi", "kolkata"];
cities.splice(2, 1, "kalshi", "mirpur"); //The splice() method overwrites the original array (add, remove, replace)
// console.log(cities);


// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
let heroes = [ "ironman", "thor", "hulk", "spiderman", "antman"];
// console.log(heroes.slice(2, 4));

let numbers = [1, 2, 3, 4, 5];
// console.log(fruits.concat(numbers)); //The concat() method concatenates (joins) two
let colors = ["red", "green", "blue"];
// console.log(fruits.concat(numbers, colors)); //The concat() method concatenates (joins) three or more

// less or almost no use 
//object constrator
let students = new Array("Shuma", "Ahadi", "Nadim");
// console.log(students)

//function constrator
let courses = Array("PHP", "JavaScript", "Python");
// console.log(courses)

// How to access an array
// alert(fruits)
// alert(courses)
// console.log(fruits[2])

// how to assign value to an array index

fruits[1] = "grapes" // assign
fruits[2][2] = 14
// console.log(fruits[2])



// Example 

let friends = [
    "jukto",
    "arnob",
    "",
    [
        0,
        "turjo",
        [
            null,
            "shakib",
            [
                4,
                7,
                undefined
            ]
        ]
    ],
    12,
    56,
    true
];


friends[3][2][2][1] = "mahin";
console.log(friends);

//Example

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies[2] = "Ola";
companies.pop();
companies.push("Amazon");
// console.log(companies);

const agun = [ "fire", "bomb", "mesile"];
// console.log(agun[agun.length]);
