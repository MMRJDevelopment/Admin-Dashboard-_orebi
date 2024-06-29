import Home from "../components/Home/Home/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "../components/Error/Error";
import Login from "../components/Authentication/Login";
import AddProduct from "../components/Product/AddProduct";
import AllProduct from "../components/Product/AllProduct";
import AllVariant from "../components/Product/AllVariant";
import Registration from "../components/Authentication/Registration";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/" element={<Home />}>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/allProduct" element={<AllProduct />}></Route>
        <Route path="/allVariant" element={<AllVariant />}></Route>
      </Route>
      <Route path="/*" element={<Error />}></Route>
    </Route>
  )
);
export default router;
