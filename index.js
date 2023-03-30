// 1
let sign = '';
let counter = 1;

while (counter < 8) {
  sign = sign + '#';
  counter += 1;
  console.log(sign);
}

// 2
let number = 0;
let cont = 1;

while (cont < 101) {
  number += 1;
  cont += 1;
  if ((number % 3 == 0) && (number % 5 > 0)) {
    console.log('Fizz');
  } else if ((number % 5 == 0) && (number % 3 > 0)) {
    console.log('Buzz');
  } else if ((number % 3 == 0) && (number % 5 == 0)) {
    console.log('FizzBuzz')
  } else { console.log(number); }
}

// 3
let f = ' ';
let h = '#';
let i = h + f;
let x = f + h;
let desk = 0;
let size = 8;

while (desk < size) {
  desk += 1;
  if ((desk % 2) > 0) {
    console.log(i.repeat(size / 2));
  } else { console.log(x.repeat(size / 2)); }
}


