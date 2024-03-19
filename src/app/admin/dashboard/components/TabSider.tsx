import { TabMenuItem } from "../page";
interface TabSiderProps {
  TabMenu: TabMenuItem[];
  changeActiveTab: (tabName: TabMenuItem["name"]) => void;
  activeTab:string
}
const TabSider = ({ TabMenu, changeActiveTab, activeTab }: TabSiderProps) => {
  return (
    <div className="bg-bg w-1/6 p-2 text-secondBg">
      <ul>
        {TabMenu.map((item) => (
          <li
            key={item.name}
            className={`p-2 ${
              activeTab === item.name
                ? "bg-myPurple-700 text-bg"
                : "bg-bg text-secondBg"
            
            }  my-2 rounded-md cursor-pointer hover:bg-myPurple-700 hover:text-secondBg transition-all`}
            onClick={() => changeActiveTab(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TabSider;
