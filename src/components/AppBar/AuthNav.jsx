import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          Registration
          {/* <NavLink to="/registration">Registration</NavLink> */}
        </li>
        <li>
          Log in
          {/* <NavLink to="/login">Log in</NavLink> */}
        </li>
      </ul>
    </nav>
  );
}
