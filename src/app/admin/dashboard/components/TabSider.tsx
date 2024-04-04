import { TabMenuItem } from "../page";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
interface TabSiderProps {
  TabMenu: TabMenuItem[];
  changeActiveTab: (tabName: TabMenuItem["name"]) => void;
  activeTab:string
}
const TabSider = ({ TabMenu, changeActiveTab, activeTab }: TabSiderProps) => {
  const user = useUser();
  return (
    <div className="bg-bg flex flex-col justify-between  p-2 text-secondBg">
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
      {
          user.isSignedIn ? <SignOutButton/> : ''
        }
    </div>
  );
};
export default TabSider;
