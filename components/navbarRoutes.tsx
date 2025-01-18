"use client";
import { UserButton } from "@clerk/nextjs";
import { LogOut, LucideBookCopy } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NavBarRoutes = () => {
   const pathname = usePathname();
   const router = useRouter();

   const isTeacherPage = pathname?.startsWith("/teacher");
   const isCoursePage = pathname?.includes("/chapter");
   return (
      <div className="flex gap-x-2 ml-auto">
         {
            isTeacherPage || isCoursePage ? (
               <Button size={'sm'} variant={'default'}
                  onClick={() => router.push("/")}>
                  <LogOut />
                  Exit
               </Button>
            ) :
               (
                  <Button size={'sm'} variant={'outline'}
                     onClick={() => router.push("/teacher/courses")}>
                     <LucideBookCopy />
                     <p className="text-[13px]">Teacher Mode</p>
                  </Button>
               )
         }
         <UserButton afterSwitchSessionUrl="/" />
      </div>
   );
}

export default NavBarRoutes;