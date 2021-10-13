import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          to="/registration"
          exact
          className="nav_link"
          activeClassName="nav_link-active"
        >
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          exact
          className="nav_link"
          activeClassName="nav_link-active"
        >
          Log in
        </NavLink>
      </li>
    </ul>
  );
}
