import { Route, Routes as Navigation} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
 return ( <Navigation>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/'} element={<Home />} />
      <Route path={'/signup'} element={<Signup/>} />
      <Route path={'/dashboard'} element={<Dashboard/>} />

  </Navigation>)
}