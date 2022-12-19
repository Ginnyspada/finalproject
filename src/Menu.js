import { Link } from "react-router-dom";
import "./nav.css";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg mb-2 ">
      <div className="container-fluid justify-content-center">
        <Link to="/" className="nav-brand">
          Welcome
        </Link>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link to="/quote" className="nav-link justify-content-center">
                Quotes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link">
                My To do List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About the Author
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
