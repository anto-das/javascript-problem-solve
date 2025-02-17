const findLongestWord = sentence =>{
    const words = sentence.split(' ');
    let longestWord = '';
    words.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    // console.log(longestWord)
}
findLongestWord("i am a student")

const findingLongestWord = sentence =>{
  const words = sentence.split(" ");
 const longestWord = words.reduce((longest,word) => word.length > longest.length ? word : longest, '')
  return longestWord;
}
console.log(findingLongestWord("i am a student of programming hero"))


const max = 20;
const min = 10;
const randomNumber = Math.floor(Math.random() * (max - min +1))+min;
console.log(randomNumber)
