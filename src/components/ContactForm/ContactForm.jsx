import { useState } from "react";
// import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
// import * as action from "../../redux/action";
import { addContacts } from "../../redux/operation";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const dispatch = useDispatch();

  const handleInputNameChange = (event) => {
    setName(event.currentTarget.value);
  };
  const handleInputTelChange = (event) => {
    setTel(event.currentTarget.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addContacts({ name, tel }));
    // event.target.reset();
    setName("");
    setTel("");
  };

  return (
    <form onSubmit={handleFormSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          className={s.input}
          value={name}
          placeholder="Name Surname"
          onChange={handleInputNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={s.label}>
        Tel
        <input
          type="tel"
          name="tel"
          className={s.input}
          placeholder="774-333-22"
          onChange={handleInputTelChange}
          value={tel}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };

// const mapDispatchToProps = (dispatch) => ({
//   submit: ({ name, tel }) => dispatch(action.addItem({ name, tel })),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);
