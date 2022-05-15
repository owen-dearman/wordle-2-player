import { useState } from "react";
import { usernameStore } from "../utils/interfaces";
import { CreateTargetWord } from "./CreateTargetWord";
import { GuessTargetWord } from "./GuessTargetWord";
import { Homepage } from "./Homepage";

export type navigationOptions =
  | "home"
  | "createTarget"
  | "guessTarget"
  | "player1wins";

export function Content(): JSX.Element {
  const [navigation, setNavigation] = useState<navigationOptions>("home");
  const [triggerRerender, setTriggerRerender] = useState<boolean>(true);
  const [targetWord, setTargetWord] = useState<string>("");
  const [usernames, setUsernames] = useState<usernameStore>({
    player1: "Player 1",
    player2: "Player 2",
  });
  return (
    <>
      {navigation === "home" && (
        <Homepage setNav={setNavigation} setUsernames={setUsernames} />
      )}
      {navigation === "createTarget" && (
        <CreateTargetWord
          usernames={usernames}
          setTargetWord={setTargetWord}
          setNav={setNavigation}
          setTriggerRerender={setTriggerRerender}
          triggerRerender={triggerRerender}
        />
      )}
      {navigation === "guessTarget" && (
        <GuessTargetWord
          usernames={usernames}
          goal={targetWord}
          setNav={setNavigation}
          navigation={navigation}
        />
      )}
    </>
  );
}
