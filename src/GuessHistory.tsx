import { MarkedGuess } from "./utils/scoringDirectMatches";

interface GuessHistoryProps{
    markedGuesses: MarkedGuess[]
}

export function GuessHistory(props: GuessHistoryProps): JSX.Element{
    return       <div>
    {props.markedGuesses.map((x) => {
      return (
        <div key={x.guess}>
          <p>Guess {props.markedGuesses.indexOf(x) + 1}: {x.guess}</p>
        </div>
      );
    })}
  </div>
}