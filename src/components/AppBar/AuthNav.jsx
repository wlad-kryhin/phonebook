import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/registration" exact>
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact>
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
