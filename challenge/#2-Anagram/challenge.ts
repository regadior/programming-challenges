/*
 * Write a function that receives two words (String) and returns
 * true or false (Bool) depending on whether they are anagrams or not.
 * An Anagram consists of forming a word by rearranging ALL the letters of another initial word.
 * the letters of another initial word.
 * It is NOT necessary to check that both words exist.
 * Two words that are exactly the same are not anagrams.
 */
function isAnagram(word1: string, word2: string) {
  word1 = word1.trim().toLowerCase();
  word2 = word2.trim().toLowerCase();
  if (word1.length !== word2.length) {
    return false;
  }
  const sortedWord1 = word1.split('').sort().join('');
  const sortedWord2 = word2.split('').sort().join('');
  if (sortedWord1 === sortedWord2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram('amor', 'roma'));
