import NavBar from "./_components/navbar";
import SideBar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="h-full">
         <div className="h-[65px] md:pl-56 fixed w-full inset-y-0 z-50">
            <NavBar />
         </div>
         <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <SideBar />
         </div>
         <main className="md:pl-56 h-full m-2">
            {children}
         </main>
      </div>
   );
}

export default DashboardLayout;