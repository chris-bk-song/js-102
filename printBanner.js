function printBanner(comment) {
  var asterisk = '*';
  var lengthOfComment = comment.length;
  console.log(asterisk.repeat(lengthOfComment + 4));
  console.log('* ' + comment + ' *');
  console.log(asterisk.repeat(lengthOfComment + 4));
}

printBanner('Welcome to DigitalCrafts!')
