import achtLogo from "../../images/8.gif";

const TopBar = () => {
  return (
    <nav className="navbar p-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={achtLogo} height="50" alt="Company Logo" />
        </a>

        <a
          href="/"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://dasachtegebot.de" className="button is-light">
                Zum Achten Gebot!
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
