import { MarkedGuess, usernameStore } from "../utils/interfaces";
import { navigationOptions } from "./Content";
import { GuessGrid } from "./GuessGrid";

interface Player1WinsProps {
  markedGuesses: MarkedGuess[];
  goal: string;
  setNav: (arg0: navigationOptions) => void;
  usernames: usernameStore;
}

export function Player1Wins(props: Player1WinsProps): JSX.Element {
  return (
    <div>
      <h1 className="playerTitle">Player 1: {props.usernames.player1} Wins!</h1>
      <h2 className="playerTitle">The Word Was: {props.goal}</h2>
      <div className="largeButtonContainer">
        <button className="homeButton" onClick={() => props.setNav("home")}>
          Home
        </button>
      </div>
      <GuessGrid markedGuesses={props.markedGuesses} />
    </div>
  );
}
