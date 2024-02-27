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
https://github.com/TrainingCenterFreshcode/node-welcome/blob/main/index.js

*/


/*
const fs = require('fs').promises;

const p = fs.readFile('./text.txt', 'utf-8');
p.then(data => console.log(data))

*/
/*
const fs = require('fs').promises;
const p = fs.readFile('./test.txt', 'utf8');
p.then((data) => {console.log(data)});

*/

/*
const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then((content) => {const newContent = `OLD content: ${content} and NEW content: 'Hello world'`;
  fs.writeFile('./newfile.txt', newContent, 'utf8'); // перезаписує файли !!!
});

*/
/*
const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then((content) => {const newContent = `APPEND OLD content: ${content} and NEW content: 'Hello world'`;
  //fs.writeFile('./newfile.txt', newContent, 'utf8'); // перезаписує файли !!!
  fs.appendFile('./newfile.txt', newContent, 'utf8');  // дописує файл
});
*/

/*
Замінити якусь частину файлу

1. Читаємо весь файл через readFile -> весь вміст файлу
2. Якось через JS змінюємо вміст файлу -> ту частину вмісту файлу, чка нам потрібна
3. Перезаписати цільовий фвйл через writeFile тими даними, які отримали в п.2
*/


console.log(' hi-hi-hi !')