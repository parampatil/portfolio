import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 flex justify-end sm:justify-center items-center fixed w-full z-50">
      <div className="flex-1 hidden sm:flex justify-center items-center gap-4 text-xl">
        <span className="font-bold">Home</span>
        <span >About</span>
        <span>Projects</span>
      </div>
      <div className="sm:hidden">
        <SidebarTrigger />
      </div>
    </nav>
  );
};

export default Navbar;
