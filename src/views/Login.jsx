import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../auth/auth-operations";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    e.target.reset();
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email
        <input onChange={handleInputChange} name="email" type="email" />
      </label>
      <label>
        Password
        <input onChange={handleInputChange} name="password" type="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
