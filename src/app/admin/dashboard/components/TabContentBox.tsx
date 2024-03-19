import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Blogs from "./Blogs";
import Settings from "./Settings";

interface TabContentBoxProps {
  activeTab: string;
}

const TabContentBox = ({ activeTab }: TabContentBoxProps) => {
  const whatTabToShow = (activeTab: string) => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Jobs":
        return <Jobs />;
      case "Blogs":
        return <Blogs />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return <div>{whatTabToShow(activeTab)}</div>;
};

export default TabContentBox;
