import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "../../auth/auth-operations";
import { getUserName } from "../../auth/auth-selectors";
import { ImUserCheck } from "react-icons/im";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const handleLogOut = () => dispatch(logOut());
  return (
    <div className="user__menu">
      <button className="button" type="button" onClick={handleLogOut}>
        Log out
      </button>
      <p className="welcome">
        Welcome :{" "}
        <span className="user__nameOK">
          {" "}
          {name} <ImUserCheck />
        </span>
      </p>
    </div>
  );
}
