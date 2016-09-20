var myArray = [];

function forLoop(array) {
  for (var i=0; i<=25; i++) {
    if (i===1) {
   array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
 }
    else {
    array.push("I am ${i} strange loops.");
  }
}

}
return forLoop(array);

function whileLoop(number) {
   while (number > 0) {
   console.log('done');
}
};

function maybeTrue() {
  return Math.random() >= 0.5
};

function doWhile(array) {
   do {
     delete array[0]
   } while (array.length > 0 && maybeTrue());
return array;
};
