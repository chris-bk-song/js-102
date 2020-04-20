function printSquare(num) {
  var asterisk = '* ';
  let count = 1;
  while (count <= num) {
    console.log((asterisk.repeat(num)));
    count ++;
  }
}

printSquare(5);
