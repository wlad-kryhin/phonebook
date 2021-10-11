import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const register = createAsyncThunk("auth/register", async (reg) => {
  try {
    const response = await axios.post("users/signup", reg);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk("auth/login", async (login) => {
  try {
    const response = await axios.post("users/login", login);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export { register, logIn };
