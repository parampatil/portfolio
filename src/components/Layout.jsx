// Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <NavBar />
        <Outlet />
        <h1>Param</h1>
      </div>
  );
};

export default Layout;
