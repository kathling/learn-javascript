//alert('hello!');

    
/*
 ___ ___  _ __  ___  ___ | | ___ 
/ __/ _ \| '_ \/ __|/ _ \| |/ _ \
| (_| (_) | | | \__ \ (_) | |  __/
\___\___/|_| |_|___/\___/|_|\___|
           
*/                    

// MDN console
// https://developer.mozilla.org/en-US/docs/Web/API/console

// console.log('hello world');
// console.error('this is an error');
// console.warn('this is a warning');

/*
                _                                  _   
   __ _ ___ ___(_) __ _ _ __  _ __ ___   ___ _ __ | |_ 
  / _` / __/ __| |/ _` | '_ \| '_ ` _ \ / _ \ '_ \| __|
 | (_| \__ \__ \ | (_| | | | | | | | | |  __/ | | | |_ 
  \__,_|___/___/_|\__, |_| |_|_| |_| |_|\___|_| |_|\__|
                  |___/                                
*/
// var: not recommended in modern javascript 
// let, const: Es6

// let age = 30;
// age = 31;
// console.log(age);

// const age2 = 30;
// age2 = 31;
// console.log(age2);

/*
      _       _          _                    
   __| | __ _| |_ __ _  | |_ _   _ _ __   ___ 
  / _` |/ _` | __/ _` | | __| | | | '_ \ / _ \
 | (_| | (_| | || (_| | | |_| |_| | |_) |  __/
  \__,_|\__,_|\__\__,_|  \__|\__, | .__/ \___|
                             |___/|_|         
*/
// Primitive Data Types: String, Numbers, Boolean, null, undefined, Symbol

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null; // variable but nothing in it
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

/*
                            _                   _   _             
   ___ ___  _ __   ___ __ _| |_ ___ _ __   __ _| |_(_) ___  _ __  
  / __/ _ \| '_ \ / __/ _` | __/ _ \ '_ \ / _` | __| |/ _ \| '_ \ 
 | (_| (_) | | | | (_| (_| | ||  __/ | | | (_| | |_| | (_) | | | |
  \___\___/|_| |_|\___\__,_|\__\___|_| |_|\__,_|\__|_|\___/|_| |_|
                                                                  
*/
// const name3 = 'John';
// const age3 = 30;

// // Concatenation
// console.log('My name is ' + name3 + ' and I am ' + age3);
// // Template String
// console.log(`My name is ${name3} and I am ${age3}`);
// const hello = `My name is ${name3} and I am ${age3}`;
// console.log(hello);

//                   1         2         3         4
//         01234567890123456789012345678901234567890
// const s = 'Hello World ... this is a small world';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(26, 31));
// console.log(s.substring(26, 31).toUpperCase());
// console.log(s.split(''));
// console.log(s.split(' '));

// const a = 'technology, computers, it, code';

// console.log(a.split(', '));

/*                              
   __ _ _ __ _ __ __ _ _   _ ___ 
  / _` | '__| '__/ _` | | | / __|
 | (_| | |  | | | (_| | |_| \__ \
  \__,_|_|  |_|  \__,_|\__, |___/
                       |___/     
*/

// // Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// //               0         1          2       3   4
// const fruits = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits);

// console.log(fruits[1]);

// fruits[5] = 'grapes';

// fruits.push('mangoes'); // add value to end

// fruits.unshift('strawberries'); // add value to beginning

// fruits.pop(); // delete the last value

// console.log(Array.isArray(fruits)); 
// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// // fruits = [];


/*
        _     _           _     _ _ _                 _     
   ___ | |__ (_) ___  ___| |_  | (_) |_ ___ _ __ __ _| |___ 
  / _ \| '_ \| |/ _ \/ __| __| | | | __/ _ \ '__/ _` | / __|
 | (_) | |_) | |  __/ (__| |_  | | | ||  __/ | | (_| | \__ \
  \___/|_.__// |\___|\___|\__| |_|_|\__\___|_|  \__,_|_|___/
           |__/                                             
*/

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 mainst',
//         city: 'Boston',
//         state: 'MA'
//     },
//     x: 3
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// // destructuring 
// // pulling values out of Person object
// const {firstName, lastName, x, address: {city}} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(x);
// console.log(city);

// person.email = 'john@gmail.com';

// console.log(person);

/*
                                          __         _     _           _       
   __ _ _ __ _ __ __ _ _   _ ___    ___  / _|   ___ | |__ (_) ___  ___| |_ ___ 
  / _` | '__| '__/ _` | | | / __|  / _ \| |_   / _ \| '_ \| |/ _ \/ __| __/ __|
 | (_| | |  | | | (_| | |_| \__ \ | (_) |  _| | (_) | |_) | |  __/ (__| |_\__ \
  \__,_|_|  |_|  \__,_|\__, |___/  \___/|_|    \___/|_.__// |\___|\___|\__|___/
                       |___/                            |__/                   
*/

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos);
// console.log(todos[1].text);

// const {text} = todos[2];
// console.log(text);

// // JSON (JavaScript Object Notation) Converter
// // https://www.freeformatter.com/json-formatter.html

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


/*
  _                       
 | | ___   ___  _ __  ___ 
 | |/ _ \ / _ \| '_ \/ __|
 | | (_) | (_) | |_) \__ \
 |_|\___/ \___/| .__/|___/
               |_|            
*/
// // for loops
// for(let i = 0; i< 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }


// // while loops
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// // looping through an array
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// for(let i = 0; i< todos.length; i++) {
//     console.log(todos[i].text);
// }

// for(let todo of todos) {
//     console.log(todo.text);
// }

// for(const {text, id, x} of todos) {
//     console.log(id, text, x);
// }

// high order array methods, iteration
// forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// method chaining
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

/*
                      _ _ _   _                   _ 
   ___ ___  _ __   __| (_) |_(_) ___  _ __   __ _| |
  / __/ _ \| '_ \ / _` | | __| |/ _ \| '_ \ / _` | |
 | (_| (_) | | | | (_| | | |_| | (_) | | | | (_| | |
  \___\___/|_| |_|\__,_|_|\__|_|\___/|_| |_|\__,_|_|
                                                    
*/

// // === compares value and datatypes
// const x = 10;
// if (x === 10) {
//     console.log('x is 10');
// }

// // == compares value
// const y = '10';
// if (y == 10) {
//     console.log('y is 10');
// }

// const z = 10;
// if (z == 10) {
//     console.log('z is 10');
// }

// const a = '10';
// if (a === 10) {
//     console.log('a is 10');
// } else {
//     console.log('a is NOT 10');
// }

// const b = 21;
// if (b === 10) {
//     console.log('b is 10');
// } else if (b > 10) {
//     console.log('b is greater than 10');
// } else {
//     console.log('b is less than 10');
// }

// // || is OR, && is AND
// const c = 4;
// const d = 11;
// if (c > 5 || d > 10) {
//     console.log('c is greater than 5 or d is greater than 10');
// }

// // ternary
// // ? is THEN
// // : is ELSE
// const e = 11;
// const color = e > 10 ? 'red': 'blue';

// // switch
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }


/*
   __                  _   _             
  / _|_   _ _ __   ___| |_(_) ___  _ __  
 | |_| | | | '_ \ / __| __| |/ _ \| '_ \ 
 |  _| |_| | | | | (__| |_| | (_) | | | |
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|
                                         
*/

// // NaN, not a number
// function addNums(num1 = 1, num2 = 1) {
//     //console.log(num1 + num2);
//     return num1 + num2;
// }

// // num1 is 5, num2 is 4
// let x = addNums(5, 4);
// console.log(x);

// // use default values
// x = addNums();
// console.log(x);

// x = addNums(5);
// console.log(x);

// // arrow function
// // include the FAT arrow
// const addNums2 = (num1 = 1, num2 = 1) => {
//     return num1 + num2;
// }
// x = addNums2(5, 4);
// console.log(x);

// const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;
// x = addNums3(5, 4);
// console.log(x);

// const square = num1 => num1 ** 2;
// console.log(square(5));

// const power = (x, b) => x**b;
// console.log(power(3, 3));
// console.log(power(3, 4));

// const power = (x, b) => x**b;

// for (let i = 1; i < 10; i++) {
//     console.log(`3**${i} : ${power(3, i)}`);
// }

// const x = [3, 5, 9].map(i => power(3, i));
// console.log(x);

// const y = [3, 5, 9].map(i => i);
// console.log(y);

// const z = [3, 5, 9];
// console.log(z);

// if (y === z) {
//     console.log('y equals z');
// } else {
//     console.log('y not equals z');
// }



