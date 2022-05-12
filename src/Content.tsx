import { useState } from "react";
import { CreateTargetWord } from "./CreateTargetWord";
import { GuessTargetWord } from "./GuessTargetWord";
import { Homepage } from "./Homepage";

type navigationOptions = "home" | "createTarget" | "guessTarget";

export function Content(): JSX.Element {
  const [navigation, setNavigation] = useState<navigationOptions>("home");
  return (
    <>
      {navigation === "home" && <Homepage />}
      {navigation === "createTarget" && <CreateTargetWord />}
      {navigation === "guessTarget" && <GuessTargetWord />}
    </>
  );
}
