const countVowels = sentence =>{
    const vowels = ['a','e','i','o','u'];
    const sumVowel = [...sentence.toLowerCase()].filter(char => vowels.includes(char)).length;
    return sumVowel;
}

countVowels("hello world");