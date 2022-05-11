export interface MarkedGuess {
  guess: string;
  result: { [key: number]: { letter: string; match: string } };
}

/**
 *
 * @param guess the guessed word
 * @param hiddenTarget the target word for guess to be marked against
 * @returns Object containing the guessed word and an object of each letter with boolean on isDirectMatch
 */

export function scoringDirectMatches(
  guess: string,
  hiddenTarget: string
): MarkedGuess {
  const dictOfDirectMatches: MarkedGuess["result"] = {};
  for (let i = 0; i < hiddenTarget.length; i++) {
    const guessedLetter = guess[i].toUpperCase();
    const targetLetter = hiddenTarget[i].toUpperCase();
    const currentIndexOfTargetWord = i + 1;
    if (isDirectMatch(guessedLetter, targetLetter)) {
      dictOfDirectMatches[currentIndexOfTargetWord] = {
        letter: guessedLetter,
        match: "DIRECT",
      };
    } else {
      dictOfDirectMatches[currentIndexOfTargetWord] = {
        letter: guessedLetter,
        match: "NONE",
      };
    }
  }
  return { guess: guess.toUpperCase(), result: dictOfDirectMatches };
}

/**
 *
 * @param letterA first letter to compare
 * @param letterB second letter to compare
 * @returns true or false
 */

export function isDirectMatch(letterA: string, letterB: string): boolean {
  return letterA.toUpperCase() === letterB.toUpperCase();
}
