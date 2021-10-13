import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn, getUserName } from "../auth/auth-selectors";
import { ImWink, ImAddressBook, ImUserPlus, ImUserCheck } from "react-icons/im";
export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  return (
    <div className="home__desc">
      <p>
        Hello dear{" "}
        <span className={userName ? "user__nameOK" : "user__name"}>
          {userName ? userName : "user"}
        </span>
        <ImWink color="blue" />
      </p>
      <p>
        You are on the main page of the
        <span className="home__app">Phonebook app</span>.
      </p>
      <p>
        This application will help you not to lose your sales phone contacts.
      </p>
      {isLoggedIn ? (
        <p>
          Go to contact list{" "}
          <Link to="/contacts" className="home-link">
            <ImAddressBook />
          </Link>
        </p>
      ) : (
        <p>
          To register, follow the link
          <Link to="/registration" className="home-link">
            <ImUserPlus />
          </Link>
          and if you already have an account, please login{" "}
          <Link to="/login" className="home-link">
            <ImUserCheck />
          </Link>
          .
        </p>
      )}
    </div>
  );
}
