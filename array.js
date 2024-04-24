// how to define an array | Indexed array
// array literal
let fruits // declaration
fruits = [ "orange", "banana", [12, 13] , "apple" ," ", true, null, undefined, 12] ; // initialization
console.log(fruits);

// less or almost no use
let students = new Array("Shuma", "Ahadi", "Nadim");
console.log(students)

let courses = Array("PHP", "JavaScript", "Python");
console.log(courses)

// How to access an array
//alert(fruits)
//alert(courses)
console.log(fruits[2])

// how to assign value to an array index

fruits[1] = "grapes" // assign
fruits[2][2]=14
console.log(fruits[2])