import { useState } from "react";
import { usernameStore } from "../utils/interfaces";
import { navigationOptions } from "./Content";

interface CreateTargetWordProps {
  setTargetWord: (arg0: string) => void;
  setNav: (arg0: navigationOptions) => void;
  setTriggerRerender: (arg0: boolean) => void;
  triggerRerender: boolean;
  usernames: usernameStore;
}

export function CreateTargetWord(props: CreateTargetWordProps): JSX.Element {
  const [word, setWord] = useState<string>("");

  function handleSubmit() {
    if (word.length === 5) {
      props.setTargetWord(word);
      setWord("");
      props.setTriggerRerender(!props.triggerRerender);
      props.setNav("guessTarget");
    } else {
      window.alert(
        "Your word must be 5 letters long! Have you ever played Wordle 🤦"
      );
    }
  }

  return (
    <section>
      <h1 className="playerTitle"> Enter Word {props.usernames.player1}</h1>
      <div className="controls">
        <div className="controlButtons">
          <input
            value={word}
            maxLength={5}
            onChange={(e) => setWord(e.target.value.toUpperCase())}
          />
          <button onClick={() => setWord("")}>Clear</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <p>
          Word Length: {word.length}/5 {word.length === 5 ? "✅" : "❌"}
        </p>
      </div>
    </section>
  );
}
