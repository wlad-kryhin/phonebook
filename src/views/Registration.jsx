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
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input onChange={handleInputChange} type="text" name="name" />
      </label>
      <label>
        Email
        <input onChange={handleInputChange} type="email" name="email" />
      </label>
      <label>
        Password
        <input onChange={handleInputChange} type="password" name="password" />
      </label>
      <label>
        Repeat password
        <input
          onChange={handleInputChange}
          type="password"
          name="repPassword"
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
}
