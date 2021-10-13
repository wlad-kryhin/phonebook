import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../auth/auth-selectors";
export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/phonebook"
            exact
            className="nav_link"
            activeClassName="nav_link-active"
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              exact
              to="/contacts"
              className="nav_link"
              activeClassName="nav_link-active"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
