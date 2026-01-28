let word = "madam";

let isPalindrome = true;

let length = word.toString().length;

for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log("The word " + word + " is " + (isPalindrome ? "a palindrome" : " not a palindrome"));