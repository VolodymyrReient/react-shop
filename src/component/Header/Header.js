import "./header.css";

function Header() {
  return (
    <nav className=" purple darken-1">
      <div className="nav-wrapper">
        <a
          href="https://volodymyrreient.github.io/react-shop/"
          className="brand-logo"
        >
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/VolodymyrReient/react-shop">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
