import { MarkedGuess } from "./interfaces";

export function isTargetWord(guesses: MarkedGuess[]): boolean {
  for (const guess of guesses) {
    let directLetterCount = 0;
    for (let i = 1; i <= 5; i++) {
      if (guess.result[i as keyof MarkedGuess["result"]].match === "DIRECT") {
        directLetterCount++;
      }
    }
    if (directLetterCount === 5) {
      return true;
    }
  }
  return false;
}
