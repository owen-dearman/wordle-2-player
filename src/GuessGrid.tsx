import { MarkedGuess } from "./utils/scoringDirectMatches";

interface GuessHistoryProps {
  markedGuesses: MarkedGuess[];
}

export function GuessGrid(props: GuessHistoryProps): JSX.Element {
  const markedGuessesDisplay = props.markedGuesses.map(createGradeRow);

  function createGradeRow(markObject: MarkedGuess) {
    const currentGuess =
      props.markedGuesses.length - props.markedGuesses.indexOf(markObject);
    return (
      <div key={`${markObject.guess} - ${Math.random}`} className="gridRow">
        <h2>Guess {currentGuess}/6</h2>
        <div className=" cellContainer">
          {markObject.result[1].match === "DIRECT" ? (
            <div className="gridCell_direct">{markObject.result[1].letter}</div>
          ) : markObject.result[1].match === "PARTIAL" ? (
            <div className="gridCell_partial">
              {markObject.result[1].letter}
            </div>
          ) : (
            <div className="gridCell_blank">{markObject.result[1].letter}</div>
          )}
          {markObject.result[2].match === "DIRECT" ? (
            <div className="gridCell_direct">{markObject.result[2].letter}</div>
          ) : markObject.result[2].match === "PARTIAL" ? (
            <div className="gridCell_partial">
              {markObject.result[2].letter}
            </div>
          ) : (
            <div className="gridCell_blank">{markObject.result[2].letter}</div>
          )}
          {markObject.result[3].match === "DIRECT" ? (
            <div className="gridCell_direct">{markObject.result[3].letter}</div>
          ) : markObject.result[3].match === "PARTIAL" ? (
            <div className="gridCell_partial">
              {markObject.result[3].letter}
            </div>
          ) : (
            <div className="gridCell_blank">{markObject.result[3].letter}</div>
          )}
          {markObject.result[4].match === "DIRECT" ? (
            <div className="gridCell_direct">{markObject.result[4].letter}</div>
          ) : markObject.result[4].match === "PARTIAL" ? (
            <div className="gridCell_partial">
              {markObject.result[4].letter}
            </div>
          ) : (
            <div className="gridCell_blank">{markObject.result[4].letter}</div>
          )}
          {markObject.result[5].match === "DIRECT" ? (
            <div className="gridCell_direct">{markObject.result[5].letter}</div>
          ) : markObject.result[5].match === "PARTIAL" ? (
            <div className="gridCell_partial">
              {markObject.result[5].letter}
            </div>
          ) : (
            <div className="gridCell_blank">{markObject.result[5].letter}</div>
          )}
        </div>
      </div>
    );
  }

  return <section className="gridContainer">{markedGuessesDisplay}</section>;
}
