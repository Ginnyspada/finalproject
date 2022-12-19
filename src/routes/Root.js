import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "../Menu";
import "react-toastify/dist/ReactToastify.css";

export default function Root() {
  return (
    <div className="container">
      <Menu />

      {/* where we want the dynamic content */}
      <Outlet />

      <ToastContainer />
    </div>
  );
}
