import { useSelector } from "react-redux";
import { getUserName } from "../../auth/auth-selectors";

export default function UserMenu() {
  const name = useSelector(getUserName);
  return (
    <div>
      <p>Welcome {name}</p>
    </div>
  );
}
