import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--left">
        <span> MY PORTFOLIO</span>
      </div>
      <div className="navbar--right">
        <ul>
          <li>
            {" "}
            <a href="">Home</a>
          </li>
          <li>
            {" "}
            <a href="">About</a>
          </li>
          <li>
            {" "}
            <a href="">Skills</a>
          </li>
          <li>
            {" "}
            <a href="">Projects</a>
          </li>
          <li>
            {" "}
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
