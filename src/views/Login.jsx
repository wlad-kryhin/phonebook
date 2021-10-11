import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../auth/auth-operations";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail(null);
    setPassword(null);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email
        <input onChange={handleInputChange} name="email" type="text" />
      </label>
      <label>
        Password
        <input onChange={handleInputChange} name="password" type="text" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
