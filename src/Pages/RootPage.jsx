import { Outlet } from "react-router";

import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBarSection/Sidebar";
import DetailsTab from "../Components/DetailsTab/DetailsTab";

const RootPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row bg-slate-100 w-[100]">
        <SideBar />
        <div>
          <DetailsTab />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default RootPage;
