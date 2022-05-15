import { useState } from "react";
import { GuessGrid } from "./GuessGrid";
import { completeScoring } from "../utils/scoringComplete";
import { MarkedGuess, usernameStore } from "../utils/interfaces";
import { navigationOptions } from "./Content";
import { Player1Wins } from "./Player1Wins";

interface GuessingPageProps {
  markedGuesses: MarkedGuess[];
  setMarkedGuesses: (value: React.SetStateAction<MarkedGuess[]>) => void;
  goal: string;
  usernames: usernameStore;
  setNav: (arg0: navigationOptions) => void;
}

export function GuessingPage(props: GuessingPageProps): JSX.Element {
  const [guess, setGuess] = useState<string>("");
  const [triggerMark, setTriggerMark] = useState<boolean>(true);
  const [giveup, setGiveup] = useState<boolean>(false);

  async function handleSubmit() {
    if (guess.length === 5) {
      setGuess("");
      props.setMarkedGuesses((prev) => [
        completeScoring(guess, props.goal),
        ...prev,
      ]);
      setTriggerMark(!triggerMark);
    } else {
      window.alert(
        "I don't think you'll do too well if you don't guess 5 letters..."
      );
    }
  }

  return (
    <section>
      {giveup ? (
        <Player1Wins
          markedGuesses={props.markedGuesses}
          goal={props.goal}
          setNav={props.setNav}
          usernames={props.usernames}
        />
      ) : (
        <div>
          <h1 className="playerTitle">
            Enter Guess {props.markedGuesses.length + 1}{" "}
            {props.usernames.player2}
          </h1>
          <div className="controls">
            <div className="controlButtons">
              <input
                value={guess}
                maxLength={5}
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
              />
              <button onClick={() => setGuess("")}>Clear</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
            <p>
              Guess Length: {guess.length}/5 {guess.length === 5 ? "✅" : "❌"}
              Guesses Remaining: {6 - props.markedGuesses.length}
            </p>
          </div>
          <GuessGrid markedGuesses={props.markedGuesses} />
          <div className="largeButtonContainer">
            <button onClick={() => setGiveup(true)}>Give Up?</button>
          </div>
        </div>
      )}
    </section>
  );
}
