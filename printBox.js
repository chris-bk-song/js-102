function printBox(column, row) {
  var empty = ' ';
  var asterisk = '*';
  let count = 1;
  while (count <= row) {
    if (count != 1 && count != row) {
      console.log('*' + empty.repeat(column - 2) + '*')
    }
    else {    
      console.log((asterisk.repeat(column)));
    }
    count ++;
  }
}

printBox(6, 4);