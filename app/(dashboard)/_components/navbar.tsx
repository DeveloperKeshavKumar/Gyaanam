import NavBarRoutes from "@/components/navbarRoutes";
import MobileBar from "./mobilebar";

const NavBar = () => {
   return (
      <div className="p-4 border-b h-full flex items-center shadow-sm">
         <MobileBar />
         <NavBarRoutes />
      </div>
   );
}

export default NavBar;