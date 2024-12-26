import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Navbar/AppSidebar";

function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="flex-1 scroll-smooth">
        <Navbar />
        <Home />
      </main>
    </SidebarProvider>
  );
}

export default App;
