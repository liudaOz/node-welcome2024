'use strict';

/*
const {MoreMyMath} = require('./MyMath.js');
const {Component1} = require('./Component.js');
// console.log(require(MyMath));

// console.log('hello world');
// console.log(2+2);

// function sum(a, b) {
//     return a+b;
// }

// console.log(sum(2, 4));

/*


const {MyMath} = require('./MyMath.js');
// console.log(require(MyMath));
console.log(MyMath);

*/

/*
const sum2n2 = MoreMyMath.sum(2, 2);
console.log(sum2n2);
const multy3n5 = MoreMyMath.multy(3, 5);
console.log(multy3n5);

const component = new Component1();
console.log(component);

// https://github.com/TrainingCenterFreshcode/node-welcome

*/

const fs = require('fs').promises;

const p = fs.readFile('./text.txt', 'utf-8');
p.then(data => console.log(data))