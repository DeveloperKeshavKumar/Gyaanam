"use client";
import { ChartBar, List, LucideLayoutDashboard, Search } from "lucide-react";
import SideBarItem from "./sidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
   {
      index: 1,
      icon: LucideLayoutDashboard,
      label: "Dashboard",
      href: "/",
   },
   {
      index: 2,
      icon: Search,
      label: "Browse",
      href: "/search",
   }
]

const teacherRoutes = [
   {
      index: 1,
      icon: List,
      label: "Courses",
      href: "/teacher/courses",
   },
   {
      index: 2,
      icon: ChartBar,
      label: "Analytics",
      href: "/teacher/analytics",
   }
]

const SideBarRoutes = () => {
   const pathname = usePathname();
   const isTeacherPage = pathname?.includes('/teacher');
   const routes = isTeacherPage ? teacherRoutes : guestRoutes;
   return (
      <div className="flex-col w-full">
         {
            routes.map((route) => (
               <SideBarItem
                  key={route.index}
                  icon={route.icon}
                  href={route.href}
                  label={route.label}
               />
            ))
         }
      </div>
   );
}

export default SideBarRoutes;