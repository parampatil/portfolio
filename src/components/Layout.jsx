import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <NavBar />
      <Outlet />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Layout;
