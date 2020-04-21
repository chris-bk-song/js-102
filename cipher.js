// 65 - 90 Capital letters
// 97 - 122 Lowercase letters


function cipher(string, offset) {
  let newString = '';
  for(let i = 0; i < string.length; i++){
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      newString += String.fromCharCode((string.charCodeAt(i) + offset - 65) % 26 + 65);
    }
    else {
      newString += String.fromCharCode((string.charCodeAt(i) + offset - 97) % 26 + 97);
    }
  }
  return newString;  
}



console.log(cipher('Hello', 13));
console.log(cipher('What is your name', 13));
