import { useState } from "react";
import { usernameStore } from "../utils/interfaces";
import { navigationOptions } from "./Content";

interface HomepageProps {
  setNav: (arg0: navigationOptions) => void;
  setUsernames: (arg0: usernameStore) => void;
}

export function Homepage(props: HomepageProps): JSX.Element {
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");

  return (
    <section>
      <div className="controls">
        <input
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        ></input>
        <input
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        ></input>
      </div>
      <div className="largeButtonContainer">
        <button
          className="startButton"
          onClick={() => {
            if (player1.length > 0 && player2.length > 0) {
              props.setUsernames({ player1: player1, player2: player2 });
            }
            props.setNav("createTarget");
          }}
        >
          <strong>S T A R T</strong>
        </button>
      </div>
      <h2>How To Play: </h2>
      <ol>
        <li>Input names and click start</li>
        <li>
          Player 1 inputs a 5-letter word into the game engine, keeping the word
          secret from Player 2. Make sure to check the word is valid first!
        </li>
        <li>Player 1 passes the device to Player 2</li>
        <li>
          Player 2 attempts to correctly guess the word, by inputting a 5-letter
          word guess
        </li>
        <li>
          When an attempt has been input, it will be marked against Player 1's
          word. There are 3 possible conditions:
        </li>
        <p>
          <em>Green: This is the correct letter in the correct place</em>
        </p>
        <p>
          <em>Yellow: This is the correct letter in the wrong place</em>
        </p>
        <p>
          <em>White: This letter is not in the word</em>
        </p>
        <li>
          If Player 2 guesses the correct word within 6 guesses, then they have
          won
        </li>
        <li>
          If Player 2 fails to guess the correct word within 6 guesses, then
          Player 1 has won
        </li>
      </ol>
    </section>
  );
}
