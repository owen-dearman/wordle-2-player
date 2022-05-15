export function Header(): JSX.Element {
  return (
    <header>
      <div className="headerContainer">
        <div className="logoContainer">
          <img
            className="logo"
            src="battordle_logo.png"
            alt="The Battordle logo is a cartoon battle axe with the word battordle in yellow and green along the hilt"
          />
        </div>
        <div className="headerSubContainer">
          <h1 className="pageTitle">BATTORDLE!</h1>
          <h2 className="subtitle">
            The Real-Time Word Guessing Game for 2 Players
          </h2>
        </div>
      </div>
    </header>
  );
}
