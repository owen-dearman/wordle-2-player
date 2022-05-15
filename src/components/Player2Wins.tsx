import { MarkedGuess, usernameStore } from "../utils/interfaces";
import { navigationOptions } from "./Content";
import { GuessGrid } from "./GuessGrid";

interface Player2WinsProps {
  markedGuesses: MarkedGuess[];
  setNav: (arg0: navigationOptions) => void;
  usernames: usernameStore;
}

export function Player2Wins(props: Player2WinsProps): JSX.Element {
  return (
    <div>
      <h1 className="playerTitle">Player 2: {props.usernames.player2} Wins!</h1>
      <GuessGrid markedGuesses={props.markedGuesses} />
      <div className="largeButtonContainer">
        <button className="homeButton" onClick={() => props.setNav("home")}>
          Home
        </button>
      </div>
    </div>
  );
}
