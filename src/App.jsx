import { RouterProvider } from "react-router-dom";
import router from "./Routes/index";
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
