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
      <h1 className="playerTitle">
        {" "}
        {props.usernames.player1.toUpperCase()}, Enter Word
      </h1>
      <div className="controls">
        <div className="controlButtons">
          <input
            value={word}
            type="text"
            maxLength={5}
            onChange={(e) => setWord(e.target.value.toUpperCase())}
          />
          <button
            className="otherButton"
            onClick={() => {
              setWord("");
              setCont(false);
            }}
          >
            Clear
          </button>
          <button className="otherButton" onClick={() => checkWordExists(word)}>
            Check
          </button>
          {cont && (
            <button className="otherButton" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
        <p>
          Word Length: {word.length}/5 {word.length === 5 ? "✅" : "❌"}
        </p>
      </div>
      <p>
        Use the check button to validate the word. We don't want{" "}
        {props.usernames.player2} to have to guess "QZXVJ" do we? When you've
        found a suitable word and checked it, whack the submit button!
      </p>
    </section>
  );
}
