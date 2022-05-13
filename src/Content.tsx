import { useState } from "react";
import { CreateTargetWord } from "./CreateTargetWord";
import { GuessTargetWord } from "./GuessTargetWord";
import { Homepage } from "./Homepage";

export type navigationOptions = "home" | "createTarget" | "guessTarget";

export function Content(): JSX.Element {
  const [navigation, setNavigation] = useState<navigationOptions>("home");
  const [triggerRerender, setTriggerRerender] = useState<boolean>(true);
  const [targetWord, setTargetWord] = useState<string>("");
  return (
    <>
      {navigation === "home" && <Homepage setNav={setNavigation} />}
      {navigation === "createTarget" && (
        <CreateTargetWord
          setTargetWord={setTargetWord}
          setNav={setNavigation}
          setTriggerRerender={setTriggerRerender}
          triggerRerender={triggerRerender}
        />
      )}
      {navigation === "guessTarget" && (
        <GuessTargetWord
          goal={targetWord}
          setTriggerRerender={setTriggerRerender}
          triggerRerender={triggerRerender}
        />
      )}
    </>
  );
}
