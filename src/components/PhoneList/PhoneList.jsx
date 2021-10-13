// import PropTypes from "prop-types";
import s from "./PhoneList.module.css";
// import * as action from "../../redux/action";
import { deleteContact, fetchItems } from "../../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/selectors";
import { useEffect } from "react";
import { ImPhone, ImUser } from "react-icons/im";

export default function PhoneList() {
  const dispatch = useDispatch();
  const list = useSelector(getList);
  const onDelete = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchItems());
    }, 100);
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {list.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.list__item}>
            <p className={s.text}>
              <ImUser />
              {name}
            </p>
            <p className={s.number}>
              <ImPhone color="blue" />
              {number}
            </p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
// PhoneList.propTypes = {
//   list: PropTypes.array,
//   onDelete: PropTypes.func,
// };

// const mapStateToProps = (state) => {
//   const { filter, items } = state.contacts;
//   // const { tel, name } = list;
//   // if (
//   //   items.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
//   // ) {
//   //   alert(`${name} is already in contacts.`);
//   // }
//   // if (items.find((contact) => contact.tel === tel)) {
//   //   alert(`${tel} is already in contacts.`);
//   // }
//   const visibleItems = getVisibleContacts(items, filter);

//   return {
//     list: visibleItems,
//   };
// };
// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (id) => dispatch(action.deleteItem(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
