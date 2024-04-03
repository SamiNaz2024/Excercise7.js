//Given Code

const friend = "BRUTUS";
const shiftValue = 3;

//Step 1

const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 2

let encryptedName = "";
for (
  let i = 0;
  i < friend.length;
  i++ // 1 will proceed by 1 and stop at the length of Friend.
) {
  const currentLetter = friend[i]; // Current letter is equal to friend with a value of 1
  const currentIndex = latinAlphabet.indexOf(currentLetter.toLowerCase()); //current is equal to the latin alphabet, currentletter will be lower case.
  const newIndex = (currentIndex + shiftValue) % latinAlphabet.length;
  encryptedName += latinAlphabet[newIndex].toUpperCase();
}

//Question 1
//Employing a loop streamlines the process, allowing us to handle each letter of the name sequentially without repetitive code. This method ensures uniform encryption and can effortlessly accommodate names of varying lengths.

//Question 2
//The expression % alphabet.length ensures that the index used in the encryption process remains within the bounds of the alphabet array, preventing index overflow and mapping to valid indices for consistent and accurate encryption.
