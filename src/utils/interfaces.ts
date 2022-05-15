export interface usernameStore {
  player1: string;
  player2: string;
}

type letterNumber = 1 | 2 | 3 | 4 | 5;
type markOptions = "NONE" | "DIRECT" | "PARTIAL";

export interface MarkedGuess {
  guess: string;
  result: { [key in letterNumber]: { letter: string; match: markOptions } };
}
