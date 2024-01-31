// 6. Write a function that takes a string as input and returns an object containing the count of each vowel (a, e, i, o, u).
// Use the reduce method to count the occurrences of each vowel.

function countVowels(str) {
  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Use the reduce method to count occurrences of each vowel
  const vowelCount = str.split('').reduce((count, char) => {
    // Check if the character is a vowel
    if (vowels.includes(char.toLowerCase())) {
      // Convert the character to lowercase to handle both cases
      char = char.toLowerCase();

      // Increment the count for the specific vowel
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  }, {});

  return vowelCount;
}

// Example usage:
const inputString = "Hello, how are you?";
const result = countVowels(inputString);
console.log(result);
// Output: { a: 1, e: 2, i: 0, o: 3, u: 1 }


