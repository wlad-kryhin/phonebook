import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./action";
const items = createReducer([], {
  [actions.fetchItemsSuccess]: (_, { payload }) => payload,
  [actions.addItemsSuccess]: (state, { payload }) => {
    if (
      state.find(
        (contact) => contact.name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts.`);
    } else if (state.find((contact) => contact.tel === payload.tel)) {
      alert(`${payload.tel} is already in contacts.`);
    } else {
      return [...state, payload];
    }
  },
  [actions.deleteItemsSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});
// const entities = createReducer([], {
//   [actions.fetchItemsSuccess]: (_, action) => action.payload,
// });
const isLoading = createReducer(false, {
  [actions.addItemsRequest]: () => true,
  [actions.addItemsSuccess]: () => false,
  [actions.addItemsError]: () => false,
  [actions.deleteItemsRequest]: () => true,
  [actions.deleteItemsSuccess]: () => false,
  [actions.deleteItemsError]: () => false,
});
// export default combineReducers({
//   entities,
//   isLoading
// })
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       if (
//         state.find(
//           (contact) =>
//             contact.name.toLowerCase() === payload.name.toLowerCase(),
//         )
//       ) {
//         alert(`${payload.name} is already in contacts.`);
//       }
//       if (state.find((contact) => contact.tel === payload.tel)) {
//         alert(`${payload.tel} is already in contacts.`);
//       }
//       return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({
  items,
  filter,
  isLoading,
});
