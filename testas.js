//1

console.log('a' >= 'b');

const a = 1;
const b = 2; 

if (a > b) {
    console.log('a > b');
}  else {
    if
     (a < b)
     {console.log('a < b');
    } else {
    console.log('a = b');
    }}
console.log('---------------------2-------------------');
//2

for (var input = 1; input <= 10; input++) {
    console.log(input);
}
console.log('---------------------3-------------------');
//3

for (let i = 2; i <= 10 ; i += 2){
    console.log(i)
}; 
console.log('---------------------4-------------------');
//4

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let array = [];

  for (let i = 0; i < 5; i++) {
      array.push(rand(1, 10))
  };
  console.log(array);
  console.log('---------------------5-------------------');
  //5
  let x = 0;
  while (x != 5) {
      x = Math.floor(Math.random()*10);
      console.log(x);
  };
  
  console.log('---------------------6-------------------');
  //6

  let arr = [...Array(rand(20, 30))].map(_ => rand(10, 30));
console.log(arr);

let index = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
        index = i;
    }
}
console.log(arr[index]);
console.log('---------------------7-------------------');
//7

let arrOfLetters = ['A', 'B', 'C', 'D'];
let arr1 = [...Array(100)].map(_ => arrOfLetters[rand(0, arrOfLetters.length-1)]);
console.log(arr1)

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let letter of arr1) {
    if (letter === 'A') {
        countA += 1;
    }
    if (letter === 'B') {
        countB += 1;
    }
    if (letter === 'C') {
        countC += 1;
    }
    if (letter === 'D') {
        countD += 1;
    }
}
console.log(`A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);
console.log('---------------------7-------------------');
//7*/