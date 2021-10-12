// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { logOut } from "../../auth/auth-operations";
import { getUserName } from "../../auth/auth-selectors";

export default function UserMenu() {
  // const dispatch = useDispatch();
  const name = useSelector(getUserName);
  // const handleLogOut = () => dispatch(logOut());
  return (
    <div>
      <p>Welcome : {name}</p>
      {/* <button type="button" onClick={handleLogOut}> */}
      {/* Log out */}
      {/* </button> */}
    </div>
  );
}
