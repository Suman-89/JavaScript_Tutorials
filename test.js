var p = 45;
console.log('p-->', typeof p, p);
var x = p.toString();
console.log('show-->', typeof x, x);
var q = '4';
console.log('q-->', q);
var y = parseInt(q);
console.log('y-->', typeof parseInt(q), parseInt(q));
var t = '';
let arr1 = [1,2,3,3,5,6,7,8];
generic(arr1);
console.log('arr1-->',typeof arr1, arr1);
console.log('index of array-->', arr1.indexOf(2));
// to convert array to object
let arr2obj = Object.assign(arr1);
console.log('arr1obj', arr2obj);
console.log('print5-->', typeof arr1[4], arr1[4]);
let arr2 = ['1','2'];
console.log('arr2-->', typeof arr2, arr2[1]);
let obj1 = {'name':'suman','place':'kolkata'};
console.log('obj1-->', typeof obj1, obj1);
console.log('obj2arraybykey-->', Object.keys(obj1));
console.log('obj2arraybyvalue->', Object.values(obj1));
console.log('obj2arraybyentries->', Object.entries(obj1));


var p = 4;
console.log('p2-->', typeof p, p);
// var r = prompt("Enter Your Name :", "Suman");
// document.write(r);

function generic(getData){

    console.log('getData-->', getData);
    let x = getData;
    console.log('x-->', x);

}
// generic(21);
let arr3 = [1,2,3,4,6];
let arr4 = ['kolkata','pune'];
let arr5 = [7,7,8,'chennai','delhi'];
const concat1 = arr4.concat(arr3).concat(arr5);
console.log('concat1-->', concat1);
const concat2 = arr4.concat(arr3,arr5);
console.log('concat2-->', concat2);

// spread operator
const concat3 = [...arr3, ...arr4];
console.log('concat3-->', concat3);

// ...arr3 ----> rest operator
//... --> spread operator

//push array.push
const arr7 = [1,4,6,'ny'];
console.log('arr7-->',arr7);
let arrPush = arr7.push(true);
console.log('arrPush-->',arrPush);
console.log('arr7-->',arr7);

//pop 
let arrPop = arr7.pop();
console.log('arPop-->',arrPop);
var arrLength = arr7.length;
console.log('arr7-->',arrLength);

// math operation 
var f = 27;
var t = Math.round(f);
console.log('math ops-->', Math.round(f), 'ceil -->',  Math.ceil(f), 'floor-->',  Math.floor(f), 'cbrt-->', Math.cbrt(f));

let stringName = 'Uttam Kumar';
let upprCase = stringName.toUpperCase(); // string to uppercase function
console.log('uppercase-->', upprCase);
let lowerCase = stringName.toLowerCase(); // string to Lowercase function
console.log('lowerCase-->', lowerCase);
