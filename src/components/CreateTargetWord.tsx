import { useState } from "react";
import { usernameStore } from "../utils/interfaces";
import { navigationOptions } from "./Content";
import axios from "axios";

interface CreateTargetWordProps {
  setTargetWord: (arg0: string) => void;
  setNav: (arg0: navigationOptions) => void;
  setTriggerRerender: (arg0: boolean) => void;
  triggerRerender: boolean;
  usernames: usernameStore;
}

export function CreateTargetWord(props: CreateTargetWordProps): JSX.Element {
  const [word, setWord] = useState<string>("");
  const [cont, setCont] = useState<boolean>(false);

  function checkWordExists(pickedWord: string) {
    axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${pickedWord.toLowerCase()}`
      )
      .then((response) => {
        window.alert(
          `${response.data[0].word} (${response.data[0].phonetic}) is a word :)`
        );
        setCont(true);
      })
      .catch(() => window.alert("Erm... I don't think that's a word chief"));
  }

  function handleSubmit() {
    if (word.length === 5) {
      props.setTargetWord(word);
      setWord("");
      props.setTriggerRerender(!props.triggerRerender);
      setCont(false);
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
          <button
            onClick={() => {
              setWord("");
              setCont(false);
            }}
          >
            Clear
          </button>
          <button onClick={() => checkWordExists(word)}>Check</button>
          {cont && <button onClick={handleSubmit}>Submit</button>}
        </div>
        <p>
          Word Length: {word.length}/5 {word.length === 5 ? "✅" : "❌"}
        </p>
      </div>
    </section>
  );
}
