//pre-increment example
let a = 5;
let b = ++a;
console.log(b);

//string type pre-increment example
let s1 = "23";
let s2 = ++s1;
console.log(s2);

//pre-decrement example
let g = 23;
let h = --g;
console.log(h);

//pre-increment/decrement example
let num1 = 3443;
let num2 = ++num1;
let num3 = ++num2;
let num4 = ++num3;
let num5 = ++num1 + ++num2 - --num3 + --num4;
console.log(num5);

//post-increment example
let x = 5;
let y = x++;
console.log(y);

//string type pre-increment example
let s3 = "23";
let s4 = s3++;
console.log(s4);

//post-decrement example
let j = 23;
let k = j--;
console.log(k);

//post-increment/decrement example
let num6 = 3443;
let num7 = num6++;
let num8 = num7++;
let num9 = num8++;
let num10 = num6++ + num7++ - num8-- + num9--;
console.log(num10);

//pre-post-increment example
let m = 2;
let n = 4;
let o = ++m + m++; //output : 6
console.log(o);

//pre-post-increment example
let q = 2;
let r = 4;
let s = ++q + q++ + q++;
console.log(s); //output : 10