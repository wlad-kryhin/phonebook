import { useSelector } from "react-redux";
import PhoneList from "../components/PhoneList/PhoneList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import { getItems } from "../redux/selectors";
export default function Contacts() {
  const items = useSelector(getItems);
  return (
    <div className="container">
      <ContactForm />
      {items.length > 1 && <Filter />}
      <PhoneList />
    </div>
  );
}
