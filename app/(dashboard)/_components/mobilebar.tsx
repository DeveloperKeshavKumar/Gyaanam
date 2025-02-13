import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./sidebar";



const MobileBar = () => {
   return (
      <Sheet>
         <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu />
         </SheetTrigger>
         <SheetContent side={"right"} className="p-0 bg-white">
            <SideBar />
         </SheetContent>
      </Sheet>
   );
}

export default MobileBar;