import { MarkedGuess } from "./utils/scoringDirectMatches";

interface GuessHistoryProps{
    markedGuesses: MarkedGuess[]
}

export function GuessHistory(props: GuessHistoryProps): JSX.Element{
  console.log(props.markedGuesses)
  const markedGuessesDisplay = props.markedGuesses.map(createGradeRow)

  function createGradeRow(markObject: MarkedGuess){
    const currentGuess = props.markedGuesses.indexOf(markObject) + 1
    return (
      <div>
        <h2>Guess {currentGuess}/6: {markObject.guess}</h2>
        <p>{markObject.result[1].letter} : {markObject.result[1].match} </p>
        <p>{markObject.result[2].letter} : {markObject.result[2].match} </p>
        <p>{markObject.result[3].letter} : {markObject.result[3].match} </p>
        <p>{markObject.result[4].letter} : {markObject.result[4].match} </p>
        <p>{markObject.result[5].letter} : {markObject.result[5].match} </p>
      </div>
    )
  }

    return <section>{markedGuessesDisplay}
  </section>
}