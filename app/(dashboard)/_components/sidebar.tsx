import Logo from "./logo";
import SideBarRoutes from "./sidebarRoutes";

const SideBar = () => {
   return (
      <div className="h-full border-r flex-col overflow-y-auto bg-white shadow-sm ">
         <div className="p-6">
            <Logo />
         </div>
         <div className="flex-col w-full mt-5">
            <SideBarRoutes />
         </div>
      </div>
   );
}

export default SideBar;