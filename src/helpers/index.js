export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const gussedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => gussedLetterSet.has(letter)).length;
}
