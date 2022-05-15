import { useState } from "react";
import { GuessGrid } from "./GuessGrid";
import { completeScoring } from "./utils/scoringComplete";
import { MarkedGuess } from "./utils/scoringDirectMatches";

interface GuessingPageProps {
  markedGuesses: MarkedGuess[];
  setMarkedGuesses: (value: React.SetStateAction<MarkedGuess[]>) => void;
  goal: string;
}

export function GuessingPage(props: GuessingPageProps): JSX.Element {
  const [guess, setGuess] = useState<string>("");
  const [triggerMark, setTriggerMark] = useState<boolean>(true);

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
          Guesses Remaining: {6 - props.markedGuesses.length}
        </p>
      </div>
      <GuessGrid markedGuesses={props.markedGuesses} />
    </section>
  );
}
