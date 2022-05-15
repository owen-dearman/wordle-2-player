import { MarkedGuess } from "../utils/scoringDirectMatches";
import { navigationOptions } from "./Content";
import { GuessGrid } from "./GuessGrid";

interface Player2WinsProps {
  markedGuesses: MarkedGuess[];
  setNav: (arg0: navigationOptions) => void;
}

export function Player2Wins(props: Player2WinsProps): JSX.Element {
  return (
    <div>
      <h1 className="playerTitle">Player 2 Wins!</h1>
      <GuessGrid markedGuesses={props.markedGuesses} />
      <div className="largeButtonContainter">
        <button className="homeButton" onClick={() => props.setNav("home")}>
          Home
        </button>
      </div>
    </div>
  );
}
