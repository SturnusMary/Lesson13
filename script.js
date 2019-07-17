'use strict';
//#1
let a;
if (a == 1) {
    console.log('true');
} else {
    console.log('false');
}

//#2 the first variant
let item;
if (!item) {
    console.log('true');
} else {
    console.log('false');
}
// the second variant
!item ? console.log('true'): console.log('false');

//#3
if (a > 0 && a < 4) {
    console.log('true');
} else {
    console.log('false');
}

//#4
let b;
if (a > 3 && a < 12 || b >= 7 && b < 15) {
    console.log('true');
} else {
    console.log('false');
}
//#5

let month = +prompt(
    'Please enter a number from 1 to 12 to find out what season it is.', '');
if (month >= 1 && month <= 12) {
    if (month <= 2 || month === 12) {
        alert('Winter');
    } else if (month > 2 && month <= 5) {
        alert('Spring');
    } else if (month > 5 && month <= 8) {
        alert('Summer');
    } else {
        alert('Autumn');
    }
} else {
    +prompt(
        'this is an incorrect value, please enter a value from 1 to 12 again', '');
}

//#6
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
