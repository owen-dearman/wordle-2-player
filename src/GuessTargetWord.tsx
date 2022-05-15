import { useState } from "react";
import { navigationOptions } from "./Content";
import { GuessHistory } from "./GuessHistory";
import { completeScoring } from "./utils/scoringComplete";
import { MarkedGuess } from "./utils/scoringDirectMatches";

interface GuessTargetWordProps {
  goal: string;
  setNav: (arg0: navigationOptions) => void;
}

export function GuessTargetWord(props: GuessTargetWordProps): JSX.Element {
  const [guess, setGuess] = useState<string>("");
  const [markedGuesses, setMarkedGuesses] = useState<MarkedGuess[]>([]);
  const [triggerMark, setTriggerMark] = useState<boolean>(true);

  async function handleSubmit() {
    if (guess.length === 5) {
      setGuess("");
      setMarkedGuesses((prev) => [completeScoring(guess, props.goal), ...prev]);
      setTriggerMark(!triggerMark);
    } else {
      window.alert(
        "I don't think you'll do too well if you don't guess 5 letters..."
      );
    }
  }

  return (
    <div>
      {markedGuesses.length < 7 ? (
        <section>
          <h1 className="playerTitle">PLAYER 2</h1>
          <div className="controls">
            <h2>Enter Guess:</h2>
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
              Guesses Remaining: {6 - markedGuesses.length}
            </p>
          </div>
          <GuessHistory markedGuesses={markedGuesses} />
        </section>
      ) : (
        <div>
          <h1>PLAYER 1 WINS</h1>
          <button onClick={() => props.setNav("home")}>Home</button>
        </div>
      )}
    </div>
  );
}
