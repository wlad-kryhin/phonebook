import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
