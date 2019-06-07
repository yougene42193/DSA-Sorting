'use strict';

const dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function random(array) {
  for (let i = 0; i < array.length; i++) {
    let rand = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }
  return array;
}

console.log(random(dataset));