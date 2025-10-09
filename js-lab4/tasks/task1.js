function replaceVowels(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'y' ||
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U' || ch === 'Y') {
      result += '*';
    } else {
      result += ch;
    }
  }
  return result;
}

console.log(replaceVowels('hello world'));
module.exports = replaceVowels;
