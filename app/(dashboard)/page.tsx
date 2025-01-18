import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
   return (
      <div>
         <UserButton afterSwitchSessionUrl="/" />
      </div>
   );
}

export default DashboardPage;