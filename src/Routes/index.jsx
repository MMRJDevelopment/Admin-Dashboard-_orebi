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
import AddCategory from "../components/Category/AddCategory";
import AddSubCategory from "../components/Category/AddSubCategory";
import CategoryStatus from "../components/Category/CategoryStatus";
import SubCategoryStatus from "../components/Category/SubCategoryStatus";
import ApproveCategory from "../components/Category/ApproveCategory";
import ApproveSubCategory from "../components/Category/ApproveSubCategory";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/" element={<Home />}>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/allProduct" element={<AllProduct />}></Route>
        <Route path="/allVariant" element={<AllVariant />}></Route>
        <Route path="/addcategory" element={<AddCategory />}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="/categorystatus" element={<CategoryStatus />}></Route>
        <Route
          path="/subcategorystatus"
          element={<SubCategoryStatus />}
        ></Route>
        <Route path="/approveCategory" element={<ApproveCategory />}></Route>
        <Route path="/approveSubCategory" element={<ApproveSubCategory />}></Route>
      </Route>
      <Route path="/*" element={<Error />}></Route>
    </Route>
  )
);
export default router;
