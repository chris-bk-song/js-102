function factors(num) {
  var arr = [];
  for (let count = 1; count <= num; count ++) {
    if (num % count === 0) {
      arr.push(count);
    }
  }
  console.log(arr);
}

factors(120);

// how to output value from last iteration only? 
// place console.log(arr) outside of for loop will only display last iteration
