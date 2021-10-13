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
    <form onSubmit={handleFormSubmit} className="form">
      <label className="label">
        Email
        <input
          className="input"
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="name@gmail.com"
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="********"
        />
      </label>
      <button type="submit" className="button">
        Log in
      </button>
    </form>
  );
}
