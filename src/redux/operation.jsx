import * as action from "./action";
import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://localhost:3000";

// const fetchItems = createAsyncThunk(
//   "contacts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = axios.get("/contacts");
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// const addContacts = createAsyncThunk(
//   "contacts/addContacts",
//   async ({ name, tel }, { rejectWithValue }) => {
//     try {
//       const item = {
//         name,
//         tel,
//       };
//       const { data } = axios.post("/contacts", item);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id, { rejectWithValue }) => {
//     try {
//       const deleteItem = axios.delete(`/contacts/${id}`);
//       return deleteItem;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

const addContacts =
  ({ name, tel }) =>
  (dispatch) => {
    const item = {
      name,
      tel,
    };
    dispatch(action.addItemsRequest());

    axios
      .post("/contacts", item)
      .then(({ data }) => dispatch(action.addItemsSuccess(data)))
      .catch((error) => dispatch(action.addItemsError(error)));
  };
const deleteContact = (id) => (dispatch) => {
  dispatch(action.deleteItemsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(action.deleteItemsSuccess(id)))
    .catch((error) => dispatch(action.deleteItemsError(error)));
};

const fetchItems = () => (dispatch) => {
  dispatch(action.fetchItemsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(action.fetchItemsSuccess(data)))
    .catch((error) => dispatch(action.fetchItemsError(error)));
};
export { addContacts, deleteContact, fetchItems };
