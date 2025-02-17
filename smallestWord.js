const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const lowestWord = heights2.reduce((lowest,word) => lowest.length < word.length ? lowest : word,heights2[0]);
console.log(lowestWord)