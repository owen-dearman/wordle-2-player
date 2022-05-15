import { MarkedGuess } from "./interfaces";
import { scoringDirectMatches } from "./scoringDirectMatches";
import { scoringPartialMatches } from "./scoringPartialMatches";

/**
 *
 * @param guess the provided guessed work to be compared to hiddenTarget
 * @param hiddenTarget the word that guess will be marked against
 * @returns an object containing the guess, and whether each letter of the guess is a direct, partial, or no match
 */

export function completeScoring(
  guess: string,
  hiddenTarget: string
): MarkedGuess {
  const markedForDirect = scoringDirectMatches(guess, hiddenTarget);
  const markedComplete = scoringPartialMatches(markedForDirect, hiddenTarget);
  return markedComplete;
}
