import Dashboard from "./Dashboard";
import Jobs from "./jobs/Jobs";
import Blogs from "./Blogs";
import Settings from "./Settings";
import ContactFormData from "./ContactFormData";

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
      case "Contact Form Data":
        return <ContactFormData />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return <div className="bg-white p-4 w-full">{whatTabToShow(activeTab)}</div>;
};

export default TabContentBox;
