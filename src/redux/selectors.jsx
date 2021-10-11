// import { createSelector } from "reselect";
const getVisibleContacts = (items, filter) => {
  const normalizeFilter = filter.toLocaleLowerCase();

  return items.filter((item) =>
    item.name.toLocaleLowerCase().includes(normalizeFilter),
  );
};
export const getFilterValue = (state) => state.contacts.filter;
export const getItems = (state) => state.contacts.items;
// export const getVisibleContacts = createSelector(
//   [getItems, getFilterValue],
//   (items, filter) => {
//     const normalizeFilter = filter.toLocaleLowerCase();

//     return items.filter((item) =>
//       item.name.toLocaleLowerCase().includes(normalizeFilter),
//     );
//   },
// );
export const getList = (state) =>
  getVisibleContacts(state.contacts.items, state.contacts.filter);
