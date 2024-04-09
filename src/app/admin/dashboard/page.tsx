"use client";
import { useState } from "react";
import TabContentBox from "./components/TabContentBox";
import TabSider from "./components/TabSider";

export interface TabMenuItem {
  name: string;
  active: boolean;
}
const DashboardPage = () => {
  const tabMenu = [
    {
      name: "Dashboard",
      active: true,
    },
    {
      name: "Jobs",
      active: false,
    },
    {
      name: "Blogs",
      active: false,
    },
    {
      name: "Settings",
      active: false,
    },
    {
      name: "Contact Form Data",
      active: false,
    }
  ];

  const [activeTab, setActiveTab] = useState(tabMenu[0].name);

  const changeActiveTab = (tabName: TabMenuItem["name"]) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-secondBg min-h-screen p-4">
      <div className="container mx-auto my-7 p-2 flex gap-3">
        <TabSider
          TabMenu={tabMenu}
          changeActiveTab={changeActiveTab}
          activeTab={activeTab}
        />
        <TabContentBox activeTab={activeTab} />
      </div>
    </div>
  );
};
export default DashboardPage;
