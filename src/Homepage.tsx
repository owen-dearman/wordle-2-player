export function Homepage(): JSX.Element {
  return (
    <section>
      <button className="startButton">S T A R T</button>
      <h2>How To Play: </h2>
      <ol>
        <li>Click start</li>
        <li>
          Player 1 inputs a 5-letter word into the game engine, keeping the word
          secret from Player 2
        </li>
        <li>Player 1 passes the device to Player 2</li>
        <li>
          Player 2 attempts to correctly guess the word, by inputting a guess
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
          <em>Black: This letter is not in the word</em>
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
