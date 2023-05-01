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
console.log('arr1-->',typeof arr1, arr1);
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
var r = prompt("Enter Your Name :", "Suman");
document.write(r);