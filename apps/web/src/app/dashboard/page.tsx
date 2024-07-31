import Campaigns from "@/components/dashboard/Campaigns";
import FollowersAccount from "@/components/dashboard/FollowersAccount";
import Inbox from "@/components/dashboard/Inbox";
import YourAudience from "@/components/dashboard/YourAudience";
import Private from "@/components/Layout/Private";

const Dashboard = (): JSX.Element => {
  return (
    <Private>
      {/* <div>
        <div className="relative w-full rounded-[20px] bg-discover-accounts-banner bg-no-repeat bg-right overflow-hidden">
          <div className="pl-[60px] flex items-center h-[246px] bg-gradient-to-r from-[rgb(17,0,106)] to-transparent">
            <h3 className="text-white text-xl font-medium">
              Discover Accounts
              <br />
              +200 Millions Account for view
            </h3>
          </div>
        </div>
      </div> */}
      <h3 className="text-xl font-medium mb-1">Hello Daniella, Welcome!</h3>
      <p className="text-sm text-base-300">Welcome back, lets explore now.</p>

      <div className="flex gap-[27px] mt-5">
        <div className="flex flex-col gap-[17px] w-[37.50%] mr-[27px]">
          <FollowersAccount />
          <Campaigns />
        </div>
        <div className="flex flex-col gap-[17px] w-[29.42%] mr-[17px]">
          <YourAudience />
        </div>
        <div className="flex flex-col gap-[17px] w-[30.02%]">
          <Inbox />
        </div>
      </div>
    </Private>
  );
};

export default Dashboard;
