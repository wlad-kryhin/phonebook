import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const register = createAsyncThunk("auth/register", async (reg) => {
  try {
    const { data } = await axios.post("users/signup", reg);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk("auth/login", async (login) => {
  try {
    const response = await axios.post("users/login", login);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
export { register, logIn, logOut };
