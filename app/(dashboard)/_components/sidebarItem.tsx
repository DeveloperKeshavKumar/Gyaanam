import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SideBarItemProps {
   icon: LucideIcon;
   label: string;
   href: string;
}
const SideBarItem = ({ icon: Icon, label, href }: SideBarItemProps) => {
   const pathname = usePathname();
   const router = useRouter();
   const isActive = (pathname === href || pathname === '/' && href === '/' || pathname?.startsWith(`${href}/`));

   const onClick = () => {
      router.push(href);
   }

   return (
      <button
         onClick={onClick}
         type="button"
         className={cn(
            "flex items-center gap-x-2 text-stone-500 text-sm font-[500] pl-6 w-full mb-1 transition-all hover:bg-stone-300/20",
            isActive && "text-stone-900 bg-stone-300/20"
         )}
      >
         <div className="flex items-center gap-x-2 py-4">
            <Icon
               size={20}
               className={cn(
                  "text-slate-500",
                  isActive && "text-stone-900"
               )} />
         </div>
         {label}
         <div
            className={cn(
               "ml-auto opacity-0 border-2 rounded-tl-md rounded-bl-md border-stone-900 h-[52px] transition-all",
               isActive && "opacity-100"
            )}></div>

      </button>
   );
}

export default SideBarItem;