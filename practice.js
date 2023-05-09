let br1 = ['uk','us','uoi'];
console.log(br1);
console.log(br1.length);

let g = br1.push('dc');
// console.log(g);
console.log(g.length);

/// sort prototype
// number array
const number = [1,2,8,44,6,94,6,3,1]
number.sort();
console.log('number',number);


//string array
const city = ['delhi','pune','chennai','ahmedabad','kolkata'];
city.sort();
console.log('city-->',city);


//increment sort
const number1 = [1,2,8,44,6,94,6,3,1];
const incrSort = number1.sort((p,s) => {
    return p-s;
});
console.log('incrSort-->', incrSort);


//decrement sort
const number2 = [1,2,8,44,6,94,6,3,1];
const decrSort = number2.sort((p,s) => {
    return s-p;
});
console.log('decrSort-->', decrSort);

// reverse
const city1 = ['delhi','pune','chennai','ahmedabad','kolkata'];
const citySort = city1.reverse();
console.log('citySort-->', citySort);


// unShif
const kolkata = ['rajpur','hedua','kalighat','sovabajzar'];
console.log('Kolkata-->', kolkata);

// after using unshift 
const newKolkata = kolkata.unshift('sealdah');
console.log('newKolkata-->', kolkata);

//using shift 
const newKolkata1 = kolkata.shift();
console.log('newKolkata1--->', kolkata);

const str = 'Suman Kumar Mukherjee';
const spl = str.split('');
console.log('spl-->', spl);
const str1 = [];
const str2 = str1.unshift(str);
console.log(str1);
let f = str1.join('_');
console.log('f-->', f);