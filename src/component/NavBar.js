import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Curso.css";

class NavBar extends React.Component {
  render() {
    return (
      <div id="nombre0">
        <nav class="navbar navbar-expand-sm justify-content-md-center bg-success navbar-dark">
          <Link class="navbar-brand" to="/">
            Logo
          </Link>

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/nuevo">
                Agregar Card
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
