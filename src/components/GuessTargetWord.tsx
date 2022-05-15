import { useState } from "react";
import { navigationOptions } from "./Content";
import { GuessingPage } from "./GuessingPage";
import { Player1Wins } from "./Player1Wins";
import { Player2Wins } from "./Player2Wins";
import { isTargetWord } from "../utils/isTargetWord";
import { MarkedGuess, usernameStore } from "../utils/interfaces";

interface GuessTargetWordProps {
  goal: string;
  setNav: (arg0: navigationOptions) => void;
  usernames: usernameStore;
  navigation: navigationOptions;
}

export function GuessTargetWord(props: GuessTargetWordProps): JSX.Element {
  const [markedGuesses, setMarkedGuesses] = useState<MarkedGuess[]>([]);

  const winningConditions =
    isTargetWord(markedGuesses) && markedGuesses.length < 7;

  return (
    <div>
      {winningConditions && markedGuesses.length < 7 ? (
        <Player2Wins
          markedGuesses={markedGuesses}
          setNav={props.setNav}
          usernames={props.usernames}
        />
      ) : !winningConditions && markedGuesses.length === 6 ? (
        <Player1Wins
          markedGuesses={markedGuesses}
          goal={props.goal}
          setNav={props.setNav}
          usernames={props.usernames}
        />
      ) : (
        <GuessingPage
          markedGuesses={markedGuesses}
          setMarkedGuesses={setMarkedGuesses}
          goal={props.goal}
          usernames={props.usernames}
          setNav={props.setNav}
        />
      )}
    </div>
  );
}
