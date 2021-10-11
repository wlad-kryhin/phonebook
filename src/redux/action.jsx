// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
// const addItem = createAction("items/add", ({ name, tel }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     tel,
//   },
// }));
// const deleteItem = createAction("items/delete");
const changeFilter = createAction("items/filter");
const fetchItemsRequest = createAction("items/fetchItemsRequest");
const fetchItemsSuccess = createAction("items/fetchItemsSuccess");
const fetchItemsError = createAction("items/fetchItemsError");

const addItemsRequest = createAction("items/addItemsRequest");
const addItemsSuccess = createAction("items/addItemsSuccess");
const addItemsError = createAction("items/addItemsError");

const deleteItemsRequest = createAction("items/deleteItemsRequest");
const deleteItemsSuccess = createAction("items/deleteItemsSuccess");
const deleteItemsError = createAction("items/deleteItemsError");
// const addItem = ({ name, tel }) => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     tel,
//   },
// });

// const deleteItem = (id) => ({
//   type: actionTypes.DELETE,
//   payload: id,
// });

// const changeFilter = (value) => ({
//   type: actionTypes.FILTER,
//   payload: value,
// });
export {
  changeFilter,
  addItemsError,
  addItemsSuccess,
  addItemsRequest,
  deleteItemsError,
  deleteItemsSuccess,
  deleteItemsRequest,
  fetchItemsError,
  fetchItemsRequest,
  fetchItemsSuccess,
};
