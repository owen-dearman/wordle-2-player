export function Footer(): JSX.Element {
  return (
    <footer>
      <hr></hr>
      <p>Thank you for playing Battordle!</p>
      <p>
        This App was created by Owen Dearman (GitHub: @owen-dearman). The
        repository can be found{" "}
        <a
          href="https://github.com/owen-dearman/wordle-2-player"
          rel="noreferrer"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p>
        This app is associated in no way to{" "}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          rel="noreferrer"
          target="_blank"
        >
          Wordle
        </a>{" "}
        and any resemblance between this app and the aforementioned property is
        coincidental.
      </p>
    </footer>
  );
}
