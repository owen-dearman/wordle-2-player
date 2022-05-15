import { useState } from "react";
import { navigationOptions } from "./Content";
import { GuessingPage } from "./GuessingPage";
import { Player1Wins } from "./Player1Wins";
import { Player2Wins } from "./Player2Wins";
import { isTargetWord } from "../utils/isTargetWord";
import { MarkedGuess } from "../utils/scoringDirectMatches";

interface GuessTargetWordProps {
  goal: string;
  setNav: (arg0: navigationOptions) => void;
}

export function GuessTargetWord(props: GuessTargetWordProps): JSX.Element {
  const [markedGuesses, setMarkedGuesses] = useState<MarkedGuess[]>([]);

  const winningConditions =
    isTargetWord(markedGuesses) && markedGuesses.length < 7;

  return (
    <div>
      {winningConditions && markedGuesses.length < 7 ? (
        <Player2Wins markedGuesses={markedGuesses} setNav={props.setNav} />
      ) : !winningConditions && markedGuesses.length === 6 ? (
        <Player1Wins
          markedGuesses={markedGuesses}
          goal={props.goal}
          setNav={props.setNav}
        />
      ) : (
        <GuessingPage
          markedGuesses={markedGuesses}
          setMarkedGuesses={setMarkedGuesses}
          goal={props.goal}
        />
      )}
    </div>
  );
}
