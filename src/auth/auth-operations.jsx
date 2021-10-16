import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    return toast.error("This user already exists", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

const logIn = createAsyncThunk("auth/login", async (login) => {
  try {
    console.log(login);
    const response = await axios.post("users/login", login);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return toast.error("Incorrect data entered", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});
const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const a = await axios.post("users/logout");
    token.unset();
    return a;
  } catch (error) {
    return toast.warning("Something went wrong", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

const currentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const { data } = await axios.get("/users/current");
    console.log(data);
    return data;
  } catch (error) {
    return toast.error("User is not defined", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});
export { register, logIn, logOut, currentUser };
