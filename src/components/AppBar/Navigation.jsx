import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          Home
          {/* <NavLink to="/">Home</NavLink> */}
        </li>
        <li>
          Contacts
          {/* <NavLink to="/contacts">Contacts</NavLink> */}
        </li>
      </ul>
    </nav>
  );
}
