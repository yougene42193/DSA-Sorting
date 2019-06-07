'use strict';

let dataset =
  '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
dataset = dataset.split(' ');
dataset.forEach((str, i) => {
  dataset[i] = parseInt(str);
});

function insertSort(array) {
  let length = array.length;
    
  for (let i = 1; i < length; i++) {
    let temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

function bucketSort(array, bucketSize) {
  let i,
    min = array[0],
    max = array[0];

  array.forEach(function(currentVal) {
    if (currentVal < min) {
      min = currentVal;
    } else if (currentVal > max) {
      max = currentVal;
    }
  });
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;
  let buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  array.forEach(function(currentVal) {
    buckets[Math.floor((currentVal - min) / bucketSize)].push(currentVal);
  });

  array.length = 0;

  buckets.forEach(function(bucket) {
    insertSort(bucket);
    bucket.forEach(function(element) {
      array.push(element);
    });
  });

  return array;
}

console.log(bucketSort(dataset, 5));