type letterNumber = 1 | 2 | 3 | 4 | 5;
type markOptions = "NONE" | "DIRECT" | "PARTIAL";

export interface MarkedGuess {
  guess: string;
  result: { [key in letterNumber]: { letter: string; match: markOptions } };
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
  const dictOfDirectMatches: MarkedGuess["result"] = {
    1: { letter: "", match: "NONE" },
    2: { letter: "", match: "NONE" },
    3: { letter: "", match: "NONE" },
    4: { letter: "", match: "NONE" },
    5: { letter: "", match: "NONE" },
  };
  for (let i = 0; i < hiddenTarget.length; i++) {
    const guessedLetter = guess[i].toUpperCase();
    const targetLetter = hiddenTarget[i].toUpperCase();
    const currentIndexOfTargetWord = i + 1;
    if (isDirectMatch(guessedLetter, targetLetter)) {
      dictOfDirectMatches[
        currentIndexOfTargetWord as keyof MarkedGuess["result"]
      ] = {
        letter: guessedLetter,
        match: "DIRECT",
      };
    } else {
      dictOfDirectMatches[
        currentIndexOfTargetWord as keyof MarkedGuess["result"]
      ] = {
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
