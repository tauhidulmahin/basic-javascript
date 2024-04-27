// let heroes = [ "ironman", "thor", "hulk", "spiderman", "antman"];

//for loop
/*for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}*/

//for of loop (For access arrays, this is preferable.)
/*for (const hero of heroes) {
    console.log(hero);
}*/

/*let marks = [ 85, 97, 44, 37, 76, 60];

let sum = 0;
for (const val of marks) {
    sum +=val;
}
let avg = sum / marks.length;
console.log(avg);*/


let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
    offer = prices[i] / 10;
    final = prices[i] - offer;
    console.log(final);
}