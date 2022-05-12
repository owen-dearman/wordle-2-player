import { useState } from "react";
import { CreateTargetWord } from "./CreateTargetWord";
import { GuessTargetWord } from "./GuessTargetWord";
import { Homepage } from "./Homepage";

export type navigationOptions = "home" | "createTarget" | "guessTarget";

export function Content(): JSX.Element {
  const [navigation, setNavigation] = useState<navigationOptions>("home");
  //eslint-disable-next-line
  const [targetWord, setTargetWord] = useState<string>("");
  return (
    <>
      {navigation === "home" && <Homepage setNav={setNavigation} />}
      {navigation === "createTarget" && (
        <CreateTargetWord
          setTargetWord={setTargetWord}
          setNav={setNavigation}
        />
      )}
      {navigation === "guessTarget" && <GuessTargetWord />}
    </>
  );
}
