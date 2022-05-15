import { MarkedGuess } from "./scoringDirectMatches";

/**
 *
 * @param partiallyMarkedGuess an object containing the results of the guess being checked for any direct matches to the hiddenTarget
 * @param hiddenTarget the word that the guess is being marked against
 * @returns an object containing a fully marked guess
 */

export function scoringPartialMatches(
  partiallyMarkedGuess: MarkedGuess,
  hiddenTarget: string
): MarkedGuess {
  let targetWordAccountability = hiddenTarget.toUpperCase().split("");
  targetWordAccountability = removeDirectMatchesFromContention(
    targetWordAccountability,
    partiallyMarkedGuess
  );
  for (let i = 0; i < hiddenTarget.length; i++) {
    const currentIndexOfTargetWord = i + 1;
    const guessedLetter =
      partiallyMarkedGuess.result[
        currentIndexOfTargetWord as keyof MarkedGuess["result"]
      ].letter;
    const guessedLetterScore =
      partiallyMarkedGuess.result[
        currentIndexOfTargetWord as keyof MarkedGuess["result"]
      ].match;
    const isPartialMatch = checkForPartialMatch(
      targetWordAccountability,
      guessedLetter
    );
    if (isPartialMatch && guessedLetterScore !== "DIRECT") {
      partiallyMarkedGuess.result[
        currentIndexOfTargetWord as keyof MarkedGuess["result"]
      ].match = "PARTIAL";
      accountForPartialMatch(targetWordAccountability, guessedLetter);
    }
  }
  return partiallyMarkedGuess;
}

/**
 *
 * @param arrayOfLetters the accountability array containing each letter of the hiddenTarget
 * @param premarkedObject the object where the direct matched have been marked
 * @returns the accountability array with direct matches replaced by *
 */

export function removeDirectMatchesFromContention(
  arrayOfLetters: string[],
  premarkedObject: MarkedGuess
): string[] {
  return arrayOfLetters.map((letter, idx) => {
    if (
      premarkedObject.result[(idx + 1) as keyof MarkedGuess["result"]]
        .letter === letter
    ) {
      return (letter = "*");
    } else {
      return letter;
    }
  });
}

/**
 *
 * @param arrayOfLetters the accountability array (with direct matches and already-accounted-for partial matches replaced by *)
 * @param letter the letter to check arrayOfLetters for
 * @returns whether arrayOfLetters contains letter
 */

export function checkForPartialMatch(
  arrayOfLetters: string[],
  letter: string
): boolean {
  return arrayOfLetters.includes(letter);
}

/**
 *
 * @param arrayOfLetters the accountability array (with direct matches and already-accounted-for partial matches replaced by *)
 * @param letter the letter to replace with * in arrayOfLetters
 */

export function accountForPartialMatch(
  arrayOfLetters: string[],
  letter: string
): void {
  const index = arrayOfLetters.findIndex((el) => el === letter);
  index > 0 && arrayOfLetters.splice(index, 1, "*");
}
