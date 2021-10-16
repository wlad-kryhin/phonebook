import "./index.css";
import AppBar from "./components/AppBar/AppBar";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { currentUser } from "./auth/auth-operations";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import Loader from "react-loader-spinner";
import { Suspense, lazy, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./views/Home"));
const Contacts = lazy(() => import("./views/Contacts"));
const Registration = lazy(() => import("./views/Registration"));
const Login = lazy(() => import("./views/Login"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <div className="container__app">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppBar />
      <Switch>
        <Suspense
          fallback={
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          }
        >
          <PublicRoute path="/" exact>
            <Home />
          </PublicRoute>
          <PrivateRoute path="/contacts" exact>
            <Contacts />
          </PrivateRoute>
          <PublicRoute path="/registration" exact restricted>
            <Registration />
          </PublicRoute>
          <PublicRoute path="/login" restricted exact>
            <Login />
          </PublicRoute>
        </Suspense>
      </Switch>
    </div>
  );
}
export default App;
