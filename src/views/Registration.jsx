import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../auth/auth-operations";
export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "repPassword":
        return setRepPassword(value);

      default:
        return;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== repPassword) {
      return alert("Пароль не совпадает");
    }
    dispatch(register({ name, email, password }));
    e.target.reset();
    setName("");
    setEmail("");
    setPassword("");
    setRepPassword("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <label className="label">
        Name
        <input
          className="input"
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Anthony"
        />
      </label>
      <label className="label">
        Email
        <input
          className="input"
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="name@gmail.com"
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="********"
        />
      </label>
      <label className="label">
        Repeat password
        <input
          className="input"
          onChange={handleInputChange}
          type="password"
          name="repPassword"
          placeholder="********"
        />
      </label>
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
}
